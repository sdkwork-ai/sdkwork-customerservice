use sdkwork_api_customerservice_assembly::assemble_api_router_from_env;
use sdkwork_iam_web_adapter::{
    build_web_framework_builder, iam_web_request_context_resolver_from_env,
};
use sdkwork_web_bootstrap::{infra_public_path_prefixes, ComposedApiAssembly};

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| tracing_subscriber::EnvFilter::new("info")),
        )
        .init();
    tracing::info!(service = "customerservice-server", "starting api server");

    let assembly = assemble_api_router_from_env()
        .await
        .expect("customerservice API assembly failed");
    let framework = build_web_framework_builder(
        iam_web_request_context_resolver_from_env().await,
        assembly.route_manifest.clone(),
        infra_public_path_prefixes(),
    );
    let app = ComposedApiAssembly::try_compose("SDKWork Customer Service API", vec![assembly])
        .expect("customerservice API composition failed")
        .into_hosted(framework)
        .router;

    let addr =
        std::env::var("CUSTOMER_SERVICE_API_BIND").unwrap_or_else(|_| "0.0.0.0:18091".to_owned());
    let listener = tokio::net::TcpListener::bind(&addr)
        .await
        .expect("bind customerservice api server");
    tracing::info!(service = "customerservice-server", %addr, "listening");
    axum::serve(listener, app)
        .await
        .expect("customerservice api server failed");
}
