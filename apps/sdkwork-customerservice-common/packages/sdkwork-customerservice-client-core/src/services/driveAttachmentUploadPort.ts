import { randomString } from "@sdkwork/utils";
import type { SdkworkDriveAppClient } from "@sdkwork/drive-app-sdk";
import {
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD,
  type CustomerserviceUploadSource,
} from "./uploadDeclaration";

export interface DriveAttachmentUploadResult {
  driveNodeId: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
}

export interface DriveAttachmentUploadPort {
  uploadTicketAttachment(file: File): Promise<DriveAttachmentUploadResult>;
}

export interface CreateDriveAttachmentUploadPortOptions {
  source: CustomerserviceUploadSource;
}

export function createDriveAttachmentUploadPort(
  driveClient: SdkworkDriveAppClient,
  options: CreateDriveAttachmentUploadPortOptions,
): DriveAttachmentUploadPort {
  return {
    async uploadTicketAttachment(file: File): Promise<DriveAttachmentUploadResult> {
      const contentType = file.type || "application/octet-stream";
      const uploadResult = await driveClient.uploader.upload({
        file,
        taskId: randomString(16),
        appResourceType: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.appResourceType,
        appResourceId: "ticket-attachment",
        scene: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.scene,
        source: options.source,
        uploadProfileCode: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.uploadProfileCode,
        fileFingerprint: `${file.name}:${file.size}:${contentType}`,
        originalFileName: file.name,
        contentType,
      });

      return {
        driveNodeId: uploadResult.uploadItem.nodeId,
        fileName: uploadResult.uploadItem.originalFileName,
        contentType: uploadResult.uploadItem.contentType,
        sizeBytes: Number(uploadResult.uploadItem.contentLength) || file.size,
      };
    },
  };
}
