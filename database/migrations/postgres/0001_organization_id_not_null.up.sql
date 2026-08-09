-- sdkwork:migration
-- id: 0001_organization_id_not_null
-- engine: postgres
-- module: sdkwork-customerservice
-- purpose: Enforce organization_id NOT NULL DEFAULT on all tables in the
--   consolidated baseline. NULL rows (pre-standard data anomalies) are
--   backfilled with the platform sentinel before NOT NULL is set, and
--   NOT NULL columns without an explicit default receive the sentinel
--   default, keeping existing deployments consistent with fresh baseline
--   installs.
-- reversible: false
-- rollback: forward-fix (sentinel backfill is the canonical fix; NULL
--   organization rows are data anomalies)
-- transactional: true
-- lock: lightweight
-- lock_timeout: 2s
-- statement_timeout: 30s

BEGIN;

UPDATE communication_cs_ticket SET organization_id = '00000000-0000-0000-0000-000000000000' WHERE organization_id IS NULL;
ALTER TABLE communication_cs_ticket ALTER COLUMN organization_id SET DEFAULT '00000000-0000-0000-0000-000000000000';
ALTER TABLE communication_cs_ticket ALTER COLUMN organization_id SET NOT NULL;

UPDATE communication_cs_plugin_enablement SET organization_id = '00000000-0000-0000-0000-000000000000' WHERE organization_id IS NULL;
ALTER TABLE communication_cs_plugin_enablement ALTER COLUMN organization_id SET DEFAULT '00000000-0000-0000-0000-000000000000';
ALTER TABLE communication_cs_plugin_enablement ALTER COLUMN organization_id SET NOT NULL;

UPDATE communication_cs_channel_account SET organization_id = '00000000-0000-0000-0000-000000000000' WHERE organization_id IS NULL;
ALTER TABLE communication_cs_channel_account ALTER COLUMN organization_id SET DEFAULT '00000000-0000-0000-0000-000000000000';
ALTER TABLE communication_cs_channel_account ALTER COLUMN organization_id SET NOT NULL;

UPDATE communication_cs_auto_reply_rule SET organization_id = '00000000-0000-0000-0000-000000000000' WHERE organization_id IS NULL;
ALTER TABLE communication_cs_auto_reply_rule ALTER COLUMN organization_id SET DEFAULT '00000000-0000-0000-0000-000000000000';
ALTER TABLE communication_cs_auto_reply_rule ALTER COLUMN organization_id SET NOT NULL;

UPDATE communication_cs_delivery_block_rule SET organization_id = '00000000-0000-0000-0000-000000000000' WHERE organization_id IS NULL;
ALTER TABLE communication_cs_delivery_block_rule ALTER COLUMN organization_id SET DEFAULT '00000000-0000-0000-0000-000000000000';
ALTER TABLE communication_cs_delivery_block_rule ALTER COLUMN organization_id SET NOT NULL;

COMMIT;
