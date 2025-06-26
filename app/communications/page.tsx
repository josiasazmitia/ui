import { CommunicationsOverview } from "@/components/communications/communications-overview"
import { MessagesList } from "@/components/communications/messages-list"
import { CommunicationActions } from "@/components/communications/communication-actions"

export default function CommunicationsPage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Communications</h1>
          <p className="text-muted-foreground">Manage messages, announcements, and notifications</p>
        </div>
      </div>

      <CommunicationsOverview />
      <CommunicationActions />
      <MessagesList />
    </div>
  )
}
