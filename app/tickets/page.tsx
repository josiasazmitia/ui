import { TicketsOverview } from "@/components/tickets/tickets-overview"
import { TicketsList } from "@/components/tickets/tickets-list"
import { TicketFilters } from "@/components/tickets/ticket-filters"

export default function TicketsPage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Issue & Ticket Management</h1>
          <p className="text-muted-foreground">Track and manage internal and external requests</p>
        </div>
      </div>

      <TicketsOverview />
      <TicketFilters />
      <TicketsList />
    </div>
  )
}
