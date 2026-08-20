import { backendApiPath } from './paths';
import type { ApiRequestOptions, HttpClient } from '../http/client';

import type { AccountRuntimeStatus, AutoReplyRuleSummary, ChannelAccountSummary, CreateAutoReplyRuleRequest, CreateChannelAccountRequest, CustomerserviceChannelsAdminAccountsListPageData, CustomerserviceChannelsAdminAutoReplyRulesListPageData, CustomerserviceChannelsAdminDeliveryBlockRulesCatalogPageData, CustomerserviceChannelsAdminDeliveryBlockRulesListPageData, CustomerserviceChannelsAdminDeliveryBlockRulesUpsertPageData, RegisterChannelCredentialRequest, SdkWorkCommandData, UpdateAutoReplyRuleRequest, UpdateChannelAccountRequest, UpsertDeliveryBlockRulesRequest } from '../types';


export interface CustomerServiceChannelsAdminCustomerserviceChannelsAdminDeliveryBlockRulesRetrieveParams {
  pluginCode: string;
}

export class CustomerServiceChannelsAdminCustomerserviceChannelsAdminDeliveryBlockRulesApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }


async retrieve(params: CustomerServiceChannelsAdminCustomerserviceChannelsAdminDeliveryBlockRulesRetrieveParams, requestOptions?: ApiRequestOptions): Promise<CustomerserviceChannelsAdminDeliveryBlockRulesCatalogPageData> {
    const query = buildQueryString([
      { name: 'pluginCode', value: params.pluginCode, style: 'form', explode: true, allowReserved: false },
    ]);
    return this.client.request<CustomerserviceChannelsAdminDeliveryBlockRulesCatalogPageData>(appendQueryString(backendApiPath(`/customer_services/channels/delivery_block_rules/catalog`), query), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, sdkworkUnwrapKind: 'page' });
  }

async list(accountId: string, requestOptions?: ApiRequestOptions): Promise<CustomerserviceChannelsAdminDeliveryBlockRulesListPageData> {
    return this.client.request<CustomerserviceChannelsAdminDeliveryBlockRulesListPageData>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/delivery_block_rules`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, sdkworkUnwrapKind: 'page' });
  }

async update(accountId: string, body: UpsertDeliveryBlockRulesRequest, requestOptions?: ApiRequestOptions): Promise<CustomerserviceChannelsAdminDeliveryBlockRulesUpsertPageData> {
    return this.client.request<CustomerserviceChannelsAdminDeliveryBlockRulesUpsertPageData>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/delivery_block_rules`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'PUT' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'page' });
  }
}

export interface CustomerServiceChannelsAdminCustomerserviceChannelsAdminAutoReplyRulesListParams {
  pluginCode?: string;
  accountId?: string;
  page?: number;
  pageSize?: number;
}

export class CustomerServiceChannelsAdminCustomerserviceChannelsAdminAutoReplyRulesApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }


async list(params?: CustomerServiceChannelsAdminCustomerserviceChannelsAdminAutoReplyRulesListParams, requestOptions?: ApiRequestOptions): Promise<CustomerserviceChannelsAdminAutoReplyRulesListPageData> {
    const query = buildQueryString([
      { name: 'pluginCode', value: params?.pluginCode, style: 'form', explode: true, allowReserved: false },
      { name: 'accountId', value: params?.accountId, style: 'form', explode: true, allowReserved: false },
      { name: 'page', value: params?.page, style: 'form', explode: true, allowReserved: false },
      { name: 'page_size', value: params?.pageSize, style: 'form', explode: true, allowReserved: false },
    ]);
    return this.client.request<CustomerserviceChannelsAdminAutoReplyRulesListPageData>(appendQueryString(backendApiPath(`/customer_services/channels/auto_reply_rules`), query), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, sdkworkUnwrapKind: 'page' });
  }

async create(body: CreateAutoReplyRuleRequest, requestOptions?: ApiRequestOptions): Promise<AutoReplyRuleSummary> {
    return this.client.request<AutoReplyRuleSummary>(backendApiPath(`/customer_services/channels/auto_reply_rules`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'item' });
  }

async update(ruleId: string, body: UpdateAutoReplyRuleRequest, requestOptions?: ApiRequestOptions): Promise<AutoReplyRuleSummary> {
    return this.client.request<AutoReplyRuleSummary>(backendApiPath(`/customer_services/channels/auto_reply_rules/${serializePathParameter(ruleId, { name: 'ruleId', style: 'simple', explode: false })}`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'PATCH' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'item' });
  }

async delete(ruleId: string, requestOptions?: ApiRequestOptions): Promise<void> {
    return this.client.request<void>(backendApiPath(`/customer_services/channels/auto_reply_rules/${serializePathParameter(ruleId, { name: 'ruleId', style: 'simple', explode: false })}`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'DELETE' as any });
  }
}

export class CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsRuntimeApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }


async start(accountId: string, requestOptions?: ApiRequestOptions): Promise<AccountRuntimeStatus> {
    return this.client.request<AccountRuntimeStatus>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/runtime/start`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, sdkworkUnwrapKind: 'item' });
  }

async stop(accountId: string, requestOptions?: ApiRequestOptions): Promise<AccountRuntimeStatus> {
    return this.client.request<AccountRuntimeStatus>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/runtime/stop`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, sdkworkUnwrapKind: 'item' });
  }

async retrieve(accountId: string, requestOptions?: ApiRequestOptions): Promise<AccountRuntimeStatus> {
    return this.client.request<AccountRuntimeStatus>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/runtime/status`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, sdkworkUnwrapKind: 'item' });
  }
}

export class CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsCredentialsApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }


async create(accountId: string, body: RegisterChannelCredentialRequest, requestOptions?: ApiRequestOptions): Promise<SdkWorkCommandData> {
    return this.client.request<SdkWorkCommandData>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/credentials`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'command' });
  }
}

export interface CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsListParams {
  pluginCode?: string;
  page?: number;
  pageSize?: number;
}

export class CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsApi {
  private client: HttpClient;
  public readonly credentials: CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsCredentialsApi;
  public readonly runtime: CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsRuntimeApi;

  constructor(client: HttpClient) {
    this.client = client;
    this.credentials = new CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsCredentialsApi(client);
    this.runtime = new CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsRuntimeApi(client);
  }


async list(params?: CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsListParams, requestOptions?: ApiRequestOptions): Promise<CustomerserviceChannelsAdminAccountsListPageData> {
    const query = buildQueryString([
      { name: 'pluginCode', value: params?.pluginCode, style: 'form', explode: true, allowReserved: false },
      { name: 'page', value: params?.page, style: 'form', explode: true, allowReserved: false },
      { name: 'page_size', value: params?.pageSize, style: 'form', explode: true, allowReserved: false },
    ]);
    return this.client.request<CustomerserviceChannelsAdminAccountsListPageData>(appendQueryString(backendApiPath(`/customer_services/channels/accounts`), query), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, sdkworkUnwrapKind: 'page' });
  }

async create(body: CreateChannelAccountRequest, requestOptions?: ApiRequestOptions): Promise<ChannelAccountSummary> {
    return this.client.request<ChannelAccountSummary>(backendApiPath(`/customer_services/channels/accounts`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'item' });
  }

async update(accountId: string, body: UpdateChannelAccountRequest, requestOptions?: ApiRequestOptions): Promise<ChannelAccountSummary> {
    return this.client.request<ChannelAccountSummary>(backendApiPath(`/customer_services/channels/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'PATCH' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'item' });
  }
}

export class CustomerServiceChannelsAdminCustomerserviceChannelsAdminApi {
  public readonly accounts: CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsApi;
  public readonly autoReplyRules: CustomerServiceChannelsAdminCustomerserviceChannelsAdminAutoReplyRulesApi;
  public readonly deliveryBlockRules: CustomerServiceChannelsAdminCustomerserviceChannelsAdminDeliveryBlockRulesApi;

  constructor(client: HttpClient) {
    this.accounts = new CustomerServiceChannelsAdminCustomerserviceChannelsAdminAccountsApi(client);
    this.autoReplyRules = new CustomerServiceChannelsAdminCustomerserviceChannelsAdminAutoReplyRulesApi(client);
    this.deliveryBlockRules = new CustomerServiceChannelsAdminCustomerserviceChannelsAdminDeliveryBlockRulesApi(client);
  }

}

export class CustomerServiceChannelsAdminCustomerserviceChannelsApi {
  public readonly admin: CustomerServiceChannelsAdminCustomerserviceChannelsAdminApi;

  constructor(client: HttpClient) {
    this.admin = new CustomerServiceChannelsAdminCustomerserviceChannelsAdminApi(client);
  }

}

export class CustomerServiceChannelsAdminCustomerserviceApi {
  public readonly channels: CustomerServiceChannelsAdminCustomerserviceChannelsApi;

  constructor(client: HttpClient) {
    this.channels = new CustomerServiceChannelsAdminCustomerserviceChannelsApi(client);
  }

}

export class CustomerServiceChannelsAdminApi {
  public readonly customerservice: CustomerServiceChannelsAdminCustomerserviceApi;

  constructor(client: HttpClient) {
    this.customerservice = new CustomerServiceChannelsAdminCustomerserviceApi(client);
  }

}

export function createCustomerServiceChannelsAdminApi(client: HttpClient): CustomerServiceChannelsAdminApi {
  return new CustomerServiceChannelsAdminApi(client);
}

function appendQueryString(path: string, rawQueryString: string): string {
  const query = rawQueryString.replace(/^\?+/, '');
  if (!query) {
    return path;
  }
  return path.includes('?') ? `${path}&${query}` : `${path}?${query}`;
}

interface PathParameterSpec {
  name: string;
  style: string;
  explode: boolean;
}

function serializePathParameter(value: unknown, spec: PathParameterSpec): string {
  if (value === undefined || value === null) {
    return '';
  }

  const style = spec.style || 'simple';
  if (Array.isArray(value)) {
    return serializePathArray(spec.name, value, style, spec.explode);
  }
  if (typeof value === 'object') {
    return serializePathObject(spec.name, value as Record<string, unknown>, style, spec.explode);
  }
  return pathPrefix(spec.name, style, false) + encodePathValue(serializePathPrimitive(value));
}

function serializePathArray(name: string, values: unknown[], style: string, explode: boolean): string {
  const serialized = values
    .filter((item) => item !== undefined && item !== null)
    .map((item) => encodePathValue(serializePathPrimitive(item)));
  if (serialized.length === 0) {
    return pathPrefix(name, style, false);
  }
  if (style === 'matrix') {
    return explode
      ? serialized.map((item) => `;${name}=${item}`).join('')
      : `;${name}=${serialized.join(',')}`;
  }
  return pathPrefix(name, style, false) + serialized.join(explode ? '.' : ',');
}

function serializePathObject(name: string, value: Record<string, unknown>, style: string, explode: boolean): string {
  const entries = Object.entries(value).filter(([, entryValue]) => entryValue !== undefined && entryValue !== null);
  if (entries.length === 0) {
    return pathPrefix(name, style, true);
  }
  if (style === 'matrix') {
    return explode
      ? entries.map(([key, entryValue]) => `;${encodePathValue(key)}=${encodePathValue(serializePathPrimitive(entryValue))}`).join('')
      : `;${name}=${entries.flatMap(([key, entryValue]) => [encodePathValue(key), encodePathValue(serializePathPrimitive(entryValue))]).join(',')}`;
  }
  const serialized = explode
    ? entries.map(([key, entryValue]) => `${encodePathValue(key)}=${encodePathValue(serializePathPrimitive(entryValue))}`).join(style === 'label' ? '.' : ',')
    : entries.flatMap(([key, entryValue]) => [encodePathValue(key), encodePathValue(serializePathPrimitive(entryValue))]).join(',');
  return pathPrefix(name, style, true) + serialized;
}

function pathPrefix(name: string, style: string, _objectValue: boolean): string {
  if (style === 'label') return '.';
  if (style === 'matrix') return `;${name}`;
  return '';
}

function encodePathValue(value: string): string {
  return encodeURIComponent(value);
}

function serializePathPrimitive(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}
interface QueryParameterSpec {
  name: string;
  value: unknown;
  style: string;
  explode: boolean;
  allowReserved: boolean;
  contentType?: string;
}

function buildQueryString(parameters: QueryParameterSpec[]): string {
  const pairs: string[] = [];
  for (const parameter of parameters) {
    appendSerializedParameter(pairs, parameter);
  }
  return pairs.join('&');
}

function appendSerializedParameter(pairs: string[], parameter: QueryParameterSpec): void {
  if (parameter.value === undefined || parameter.value === null) {
    return;
  }

  if (parameter.contentType) {
    pairs.push(`${encodeQueryComponent(parameter.name)}=${encodeQueryValue(JSON.stringify(parameter.value), parameter.allowReserved)}`);
    return;
  }

  const style = parameter.style || 'form';
  if (style === 'deepObject') {
    appendDeepObjectParameter(pairs, parameter.name, parameter.value, parameter.allowReserved);
    return;
  }

  if (Array.isArray(parameter.value)) {
    appendArrayParameter(pairs, parameter.name, parameter.value, style, parameter.explode, parameter.allowReserved);
    return;
  }

  if (typeof parameter.value === 'object') {
    appendObjectParameter(pairs, parameter.name, parameter.value as Record<string, unknown>, style, parameter.explode, parameter.allowReserved);
    return;
  }

  pairs.push(`${encodeQueryComponent(parameter.name)}=${encodeQueryValue(serializePrimitive(parameter.value), parameter.allowReserved)}`);
}

function appendArrayParameter(
  pairs: string[],
  name: string,
  value: unknown[],
  style: string,
  explode: boolean,
  allowReserved: boolean,
): void {
  const values = value
    .filter((item) => item !== undefined && item !== null)
    .map((item) => serializePrimitive(item));
  if (values.length === 0) {
    return;
  }

  if (style === 'form' && explode) {
    for (const item of values) {
      pairs.push(`${encodeQueryComponent(name)}=${encodeQueryValue(item, allowReserved)}`);
    }
    return;
  }

  pairs.push(`${encodeQueryComponent(name)}=${encodeQueryValue(values.join(','), allowReserved)}`);
}

function appendObjectParameter(
  pairs: string[],
  name: string,
  value: Record<string, unknown>,
  style: string,
  explode: boolean,
  allowReserved: boolean,
): void {
  const entries = Object.entries(value).filter(([, entryValue]) => entryValue !== undefined && entryValue !== null);
  if (entries.length === 0) {
    return;
  }

  if (style === 'form' && explode) {
    for (const [key, entryValue] of entries) {
      pairs.push(`${encodeQueryComponent(key)}=${encodeQueryValue(serializePrimitive(entryValue), allowReserved)}`);
    }
    return;
  }

  const serialized = entries.flatMap(([key, entryValue]) => [key, serializePrimitive(entryValue)]).join(',');
  pairs.push(`${encodeQueryComponent(name)}=${encodeQueryValue(serialized, allowReserved)}`);
}

function appendDeepObjectParameter(
  pairs: string[],
  name: string,
  value: unknown,
  allowReserved: boolean,
): void {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    pairs.push(`${encodeQueryComponent(name)}=${encodeQueryValue(serializePrimitive(value), allowReserved)}`);
    return;
  }

  for (const [key, entryValue] of Object.entries(value as Record<string, unknown>)) {
    if (entryValue === undefined || entryValue === null) {
      continue;
    }
    pairs.push(`${encodeQueryComponent(`${name}[${key}]`)}=${encodeQueryValue(serializePrimitive(entryValue), allowReserved)}`);
  }
}

function serializePrimitive(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

function encodeQueryComponent(value: string): string {
  return encodeURIComponent(value);
}

function encodeQueryValue(value: string, allowReserved: boolean): string {
  const encoded = encodeURIComponent(value);
  if (!allowReserved) {
    return encoded;
  }
  return encoded.replace(/%3A/gi, ':')
    .replace(/%2F/gi, '/')
    .replace(/%3F/gi, '?')
    .replace(/%23/gi, '#')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
    .replace(/%40/gi, '@')
    .replace(/%21/gi, '!')
    .replace(/%24/gi, '$')
    .replace(/%26/gi, '&')
    .replace(/%27/gi, "'")
    .replace(/%28/gi, '(')
    .replace(/%29/gi, ')')
    .replace(/%2A/gi, '*')
    .replace(/%2B/gi, '+')
    .replace(/%2C/gi, ',')
    .replace(/%3B/gi, ';')
    .replace(/%3D/gi, '=');
}
