//! Gateway bootstrap for sdkwork-customerservice.
//!
//! The assembly exports the indivisible `ApiAssemblyContribution` contract
//! (API_ASSEMBLY_SPEC.md section 4); the platform cloud gateway composes the
//! contribution with its process-shared PostgreSQL pool.

use axum::Router;
use sdkwork_customerservice_service_host::CustomerServiceHost;
use sdkwork_database_sqlx::DatabasePool;
use sdkwork_web_bootstrap::{ApiAssemblyContribution, DatabasePoolReadinessCheck, ReadinessCheck, WebModule};
use sdkwork_web_core::HttpRouteManifest;
use std::future::Future;
use std::pin::Pin;
use std::sync::Arc;

/// Indivisible host-neutral API assembly contribution (web-bootstrap contract).
pub type ApiAssembly = ApiAssemblyContribution;

struct PostgresReadiness {
    pool: DatabasePool,
}

impl ReadinessCheck for PostgresReadiness {
    fn check(&self) -> Pin<Box<dyn Future<Output = Result<(), String>> + Send + '_>> {
        let pool = self.pool.clone();
        Box::pin(async move {
            let postgres = pool
                .as_postgres()
                .ok_or_else(|| "postgres database pool is unavailable".to_owned())?;
            sqlx::query("SELECT 1")
                .execute(postgres)
                .await
                .map_err(|error| error.to_string())?;
            Ok(())
        })
    }
}

fn combined_route_manifest() -> HttpRouteManifest {
    let manifests = [
        sdkwork_routes_customerservice_app_api::gateway_route_manifest(),
        sdkwork_routes_customerservice_backend_api::gateway_route_manifest(),
        sdkwork_routes_customerservice_internal_api::gateway_route_manifest(),
    ];
    HttpRouteManifest::from_owned_routes(
        manifests
            .into_iter()
            .flat_map(|manifest| manifest.routes().to_vec())
            .collect(),
    )
}

fn contribution_from(
    router: Router,
    readiness_check: Arc<dyn ReadinessCheck>,
) -> Result<ApiAssembly, String> {
    ApiAssemblyContribution::from_manifest(
        "sdkwork-customerservice",
        "SDKWork Customer Service API",
        router,
        combined_route_manifest(),
        Vec::new(),
        readiness_check,
    )
}

pub async fn assemble_api_router(host: Arc<CustomerServiceHost>) -> ApiAssembly {
    let app_router =
        sdkwork_routes_customerservice_app_api::gateway_mount_business(host.clone()).await;
    let backend_router =
        sdkwork_routes_customerservice_backend_api::gateway_mount_business(host.clone()).await;
    let internal_router =
        sdkwork_routes_customerservice_internal_api::gateway_mount_business(host.clone()).await;

    let readiness = Arc::new(PostgresReadiness {
        pool: host.database_pool().clone(),
    });
    let router = Router::new()
        .merge(app_router)
        .merge(backend_router)
        .merge(internal_router);

    contribution_from(router, readiness).expect("customerservice contribution contract is valid")
}

/// Assemble the customerservice application router from environment variables.
pub async fn assemble_api_router_from_env() -> Result<ApiAssembly, String> {
    let host = Arc::new(CustomerServiceHost::from_env().await?);
    Ok(assemble_api_router(host).await)
}

/// Assemble the Customer Service contribution against a caller-provided
/// database pool so the platform cloud gateway can share its process-wide
/// PostgreSQL pool.
pub async fn assemble_api_router_with_pool(pool: DatabasePool) -> Result<ApiAssembly, String> {
    let host = Arc::new(CustomerServiceHost::from_database_pool(pool.clone()).await?);
    let app_router =
        sdkwork_routes_customerservice_app_api::gateway_mount_business(host.clone()).await;
    let backend_router =
        sdkwork_routes_customerservice_backend_api::gateway_mount_business(host.clone()).await;
    let internal_router =
        sdkwork_routes_customerservice_internal_api::gateway_mount_business(host).await;
    let router = Router::new()
        .merge(app_router)
        .merge(backend_router)
        .merge(internal_router);
    contribution_from(router, Arc::new(DatabasePoolReadinessCheck::new(pool)))
}

/// Canonical Web Module definition for this application
/// (API_ASSEMBLY_SPEC §4.1.1): the complete HTTP surface — every route,
/// manifest, and OpenAPI document of this owner — as one installable module.
pub async fn web_module() -> Result<WebModule, String> {
    Ok(WebModule::from_contribution(assemble_api_router_from_env().await?))
}

/// Same as [`web_module`] but composed on a process-shared database pool
/// (platform gateways, API_ASSEMBLY_SPEC §4.1.1).
pub async fn web_module_with_pool(pool: DatabasePool) -> Result<WebModule, String> {
    Ok(WebModule::from_contribution(assemble_api_router_with_pool(pool).await?))
}
