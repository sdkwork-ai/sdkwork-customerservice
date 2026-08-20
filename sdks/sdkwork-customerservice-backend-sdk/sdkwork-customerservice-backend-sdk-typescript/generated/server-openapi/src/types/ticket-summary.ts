export interface TicketSummary {
  id: string;
  ticketNo: string;
  subject: string;
  status: string;
  priority: string;
  channel: string;
  requesterUserId: string;
  assigneeUserId?: string | null;
  createdAt: string;
  updatedAt: string;
}
