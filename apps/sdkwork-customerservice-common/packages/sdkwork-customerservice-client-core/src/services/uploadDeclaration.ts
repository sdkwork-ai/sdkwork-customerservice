/**
 * Upload declaration constants for the SDKWork Customer Service application root.
 *
 * Source of truth:
 * `apps/sdkwork-customerservice-common/specs/upload.declaration.json`
 * (DRIVE_SPEC.md §18). Upload call sites MUST consume these constants instead of
 * repeating the declared literals inline — §18.3 forbids duplicating a declared
 * value as a bare literal because a duplicate silently diverges from the
 * declaration that the gate validates.
 *
 * Only `source` varies per host surface (PC vs H5). It stays a call-time value
 * because §18.3 allows a `source` that identifies *which surface of this same
 * application* issued the upload; both values are `source` labels of this one
 * declared application root, and §18.4's "identical across call sites" rule
 * applies per declared source. The `(appResourceType, scene, uploadProfileCode)`
 * triple that §18.4 requires to be distinct is fixed here.
 */

export interface CustomerserviceUploadDeclarationEntry {
  readonly appResourceType: string;
  readonly appResourceIdKind: 'application' | 'entity' | 'draft';
  readonly scene: string;
  readonly source: string;
  readonly uploadProfileCode: string;
  readonly retention: 'long_term' | 'temporary';
  readonly retentionTtlSeconds?: number;
  readonly purpose: string;
}

export const CUSTOMERSERVICE_APP_ID = 'sdkwork-customerservice' as const;

/** Surface labels of this application root; both are declared `source` values. */
export const CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_PC =
  'customerservice-pc' as const;
export const CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_H5 =
  'customerservice-h5' as const;

export const CUSTOMERSERVICE_UPLOAD_SOURCES = [
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_PC,
  CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_H5,
] as const;

export type CustomerserviceUploadSource =
  (typeof CUSTOMERSERVICE_UPLOAD_SOURCES)[number];

export const CUSTOMERSERVICE_TICKET_ATTACHMENT_APP_RESOURCE_TYPE =
  'customerservice.ticket_attachment' as const;
export const CUSTOMERSERVICE_TICKET_ATTACHMENT_SCENE =
  'ticket-attachment' as const;
export const CUSTOMERSERVICE_TICKET_ATTACHMENT_PROFILE_CODE = 'attachment' as const;

/**
 * PC surface entry. The identity fields (`appResourceType`, `scene`,
 * `uploadProfileCode`) are shared by both surfaces — read them from this
 * constant rather than from the H5 one, so the two can never drift.
 */
export const CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD = {
  appResourceType: CUSTOMERSERVICE_TICKET_ATTACHMENT_APP_RESOURCE_TYPE,
  appResourceIdKind: 'entity',
  scene: CUSTOMERSERVICE_TICKET_ATTACHMENT_SCENE,
  source: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_PC,
  uploadProfileCode: CUSTOMERSERVICE_TICKET_ATTACHMENT_PROFILE_CODE,
  retention: 'long_term',
  purpose:
    'Attachment uploaded by an agent from the customer-service console onto a support ticket, kept for the lifetime of the ticket.',
} as const satisfies CustomerserviceUploadDeclarationEntry;

/**
 * H5 surface entry. Only `source` differs, so the identity fields are taken from
 * `CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD` (`customerservice.ticket_attachment`
 * / `ticket-attachment` / `attachment`) — deriving them keeps the two surfaces
 * on one identity, and the `source` literal here is the only value that is
 * allowed to differ. This constant exists *only* to be declared: the call site
 * passes `CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_H5` as its `source`,
 * so no runtime code reads a duplicate triple constant.
 */
export const CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_H5 = {
  appResourceType: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.appResourceType,
  appResourceIdKind: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.appResourceIdKind,
  scene: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.scene,
  source: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_SOURCE_H5,
  uploadProfileCode: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.uploadProfileCode,
  retention: CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD.retention,
  purpose:
    'Attachment uploaded by an end user from the customer-service H5 surface onto a support ticket, kept for the lifetime of the ticket.',
} as const satisfies CustomerserviceUploadDeclarationEntry;

export const CUSTOMERSERVICE_UPLOAD_DECLARATIONS: readonly CustomerserviceUploadDeclarationEntry[] =
  [
    CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD,
    CUSTOMERSERVICE_TICKET_ATTACHMENT_UPLOAD_H5,
  ];
