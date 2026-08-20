export interface DeliveryBlockRuleSummary {
  id?: string | null;
  ruleCode: string;
  ruleName: string;
  ruleDescription: string;
  enabled: boolean;
  priority: number;
  excludedExternalItemIds: string[];
  actionConfig: Record<string, unknown>;
  defaultActionConfig: Record<string, unknown>;
}
