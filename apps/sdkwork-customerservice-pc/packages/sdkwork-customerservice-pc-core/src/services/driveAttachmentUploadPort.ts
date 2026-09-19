import {
  createDriveAttachmentUploadPort as createSharedDriveAttachmentUploadPort,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_PC,
  type DriveAttachmentUploadPort,
  type DriveAttachmentUploadResult,
} from "@sdkwork/customerservice-client-core";
import type { SdkworkDriveAppClient } from "@sdkwork/drive-app-sdk";

export type { DriveAttachmentUploadPort, DriveAttachmentUploadResult };

export function createDriveAttachmentUploadPort(
  driveClient: SdkworkDriveAppClient,
): DriveAttachmentUploadPort {
  return createSharedDriveAttachmentUploadPort(driveClient, {
    source: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_PC,
  });
}
