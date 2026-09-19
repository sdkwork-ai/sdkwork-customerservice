export {
  resolveCustomerServiceApiBaseUrl,
  resolveCustomerServiceApplicationBaseUrl,
  resolveCustomerServiceAppApiBaseUrl,
  resolveCustomerServiceBackendApiBaseUrl,
  resolveDriveApiBaseUrl,
  resolveIamAppApiBaseUrl,
  resolvePlatformApiGatewayBaseUrl,
  shouldUseBrowserDevProxy,
  readSdkBaseUrlEnvValue,
  isSdkRuntimeDev,
  type ClientPlatform,
  type ClientRuntimeEnv,
} from "./config/resolveApiBaseUrl";
export { buildCustomerServiceViteDevProxy } from "./dev/viteDevProxy";
export {
  clearCustomerServiceIamSession,
  commitCustomerServiceIamSession,
  createCustomerServiceIamSessionChangedEventName,
  dispatchCustomerServiceIamSessionChanged,
  isCustomerServiceIamSessionAuthenticated,
  loadCustomerServiceIamSession,
  saveCustomerServiceIamSession,
  toOperatorSession,
  type CustomerServiceIamSession,
} from "./iam/customerServiceIamSession";
export {
  createCustomerServiceIamAuthRuntime,
  getCustomerServiceIamAuthRuntime,
  resetCustomerServiceIamAuthRuntime,
  resolveCustomerServiceAuthAppearance,
  resolveCustomerServiceAuthRuntimeConfig,
  type CreateCustomerServiceIamAuthRuntimeOptions,
} from "./iam/createCustomerServiceIamAuthRuntime";
export {
  listPluginCatalog,
  upsertPluginEnablement,
} from "./services/pluginAdminService";
export { formatSdkError } from "./errors/formatSdkError";
export {
  buildOperatorSdkHeaders,
  type OperatorSession,
} from "./session/operatorSdkHeaders";
export {
  DEFAULT_OPERATOR_SESSION_ENV_PREFIX,
  loadOperatorSessionFromStorage,
  normalizeOperatorSession,
  readOperatorSessionFromEnv,
  saveOperatorSessionToStorage,
} from "./session/operatorSessionStorage";
export {
  listChannelAccounts,
  createChannelAccount,
  updateChannelAccount,
  registerChannelCredential,
  listAutoReplyRules,
  createAutoReplyRule,
  updateAutoReplyRule,
  deleteAutoReplyRule,
  startChannelAccountRuntime,
  stopChannelAccountRuntime,
  getChannelAccountRuntimeStatus,
  listDeliveryBlockRuleCatalog,
  listAccountDeliveryBlockRules,
  upsertAccountDeliveryBlockRules,
} from "./services/channelAdminService";
export {
  listOperatorTickets,
  retrieveOperatorTicket,
  updateOperatorTicket,
  listOperatorTicketMessages,
  sendOperatorTicketMessage,
  type TicketAdminListParams,
} from "./services/ticketAdminService";
export {
  createMyTicket,
  listMyTicketAttachments,
  listMyTicketMessages,
  listMyTickets,
  registerMyTicketAttachment,
  retrieveMyTicket,
  sendMyTicketMessage,
  type TicketAppListParams,
} from "./services/ticketAppService";
export {
  createDriveAttachmentUploadPort,
  type CreateDriveAttachmentUploadPortOptions,
  type DriveAttachmentUploadPort,
  type DriveAttachmentUploadResult,
} from "./services/driveAttachmentUploadPort";
export {
  CUSTOMERSERVICE_APP_ID,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_APP_RESOURCE_TYPE,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_PROFILE_CODE,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_SCENE,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_H5,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_H5,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_PC,
  CUSTOMERSERVICE_UPLOAD_DECLARATIONS,
  CUSTOMERSERVICE_UPLOAD_SOURCES,
} from "./services/uploadDeclaration";
export type {
  CustomerserviceUploadDeclarationEntry,
  CustomerserviceUploadSource,
} from "./services/uploadDeclaration";
export { IamSessionPanel, type IamSessionPanelProps } from "./ui/IamSessionPanel";
