import { customApiPath } from './paths';
import type { ApiRequestOptions, HttpClient } from '../http/client';

import type { AccountRuntimeStatus, DeliveryPreCheckRequest, DeliveryPreCheckResult, SendPluginMessageRequest, SendPluginMessageResult } from '../types';


export class CustomerServicePluginRuntimeCustomerservicePluginsInternalAccountsApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }


async start(pluginCode: string, accountId: string, requestOptions?: ApiRequestOptions): Promise<AccountRuntimeStatus> {
    return this.client.request<AccountRuntimeStatus>(customApiPath(`/customer_services/plugins/${serializePathParameter(pluginCode, { name: 'pluginCode', style: 'simple', explode: false })}/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/start`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, sdkworkUnwrapKind: 'item' });
  }

async stop(pluginCode: string, accountId: string, requestOptions?: ApiRequestOptions): Promise<AccountRuntimeStatus> {
    return this.client.request<AccountRuntimeStatus>(customApiPath(`/customer_services/plugins/${serializePathParameter(pluginCode, { name: 'pluginCode', style: 'simple', explode: false })}/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/stop`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, sdkworkUnwrapKind: 'item' });
  }

async status(pluginCode: string, accountId: string, requestOptions?: ApiRequestOptions): Promise<AccountRuntimeStatus> {
    return this.client.request<AccountRuntimeStatus>(customApiPath(`/customer_services/plugins/${serializePathParameter(pluginCode, { name: 'pluginCode', style: 'simple', explode: false })}/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/status`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, sdkworkUnwrapKind: 'item' });
  }

async sendMessage(pluginCode: string, accountId: string, body: SendPluginMessageRequest, requestOptions?: ApiRequestOptions): Promise<SendPluginMessageResult> {
    return this.client.request<SendPluginMessageResult>(customApiPath(`/customer_services/plugins/${serializePathParameter(pluginCode, { name: 'pluginCode', style: 'simple', explode: false })}/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/send_message`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'item' });
  }

async deliveryPreCheck(pluginCode: string, accountId: string, body: DeliveryPreCheckRequest, requestOptions?: ApiRequestOptions): Promise<DeliveryPreCheckResult> {
    return this.client.request<DeliveryPreCheckResult>(customApiPath(`/customer_services/plugins/${serializePathParameter(pluginCode, { name: 'pluginCode', style: 'simple', explode: false })}/accounts/${serializePathParameter(accountId, { name: 'accountId', style: 'simple', explode: false })}/delivery_pre_check`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'POST' as any, body, contentType: 'application/json', sdkworkUnwrapKind: 'item' });
  }
}

export class CustomerServicePluginRuntimeCustomerservicePluginsInternalApi {
  public readonly accounts: CustomerServicePluginRuntimeCustomerservicePluginsInternalAccountsApi;

  constructor(client: HttpClient) {
    this.accounts = new CustomerServicePluginRuntimeCustomerservicePluginsInternalAccountsApi(client);
  }

}

export class CustomerServicePluginRuntimeCustomerservicePluginsApi {
  public readonly internal: CustomerServicePluginRuntimeCustomerservicePluginsInternalApi;

  constructor(client: HttpClient) {
    this.internal = new CustomerServicePluginRuntimeCustomerservicePluginsInternalApi(client);
  }

}

export class CustomerServicePluginRuntimeCustomerserviceApi {
  public readonly plugins: CustomerServicePluginRuntimeCustomerservicePluginsApi;

  constructor(client: HttpClient) {
    this.plugins = new CustomerServicePluginRuntimeCustomerservicePluginsApi(client);
  }

}

export class CustomerServicePluginRuntimeApi {
  public readonly customerservice: CustomerServicePluginRuntimeCustomerserviceApi;

  constructor(client: HttpClient) {
    this.customerservice = new CustomerServicePluginRuntimeCustomerserviceApi(client);
  }

}

export function createCustomerServicePluginRuntimeApi(client: HttpClient): CustomerServicePluginRuntimeApi {
  return new CustomerServicePluginRuntimeApi(client);
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
