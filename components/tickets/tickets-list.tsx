import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MessageCircle, User } from "lucide-react"

const ticketsData = [
  {
    id: "TK-001",
    title: "Grade Portal Access Issue",
    description: "Parent unable to access student grades through portal",
    status: "open",
    priority: "high",
    category: "technical",
    assignee: "John Smith",
    reporter: "Maria Garcia (Parent)",
    created: "2024-03-15",
    updated: "2024-03-15",
    responses: 2,
  },
  {
    id: "TK-002",
    title: "Request for Academic Transcript",
    description: "Student needs official transcript for college application",
    status: "in-progress",
    priority: "medium",
    category: "administrative",
    assignee: "Sarah Johnson",
    reporter: "David Wilson (Student)",
    created: "2024-03-14",
    updated: "2024-03-15",
    responses: 5,
  },
  {
    id: "TK-003",
    title: "Payment Plan Request",
    description: "Family requesting extended payment plan for tuition",
    status: "open",
    priority: "medium",
    category: "administrative",
    assignee: "Mike Davis",
    reporter: "Jennifer Brown (Parent)",
    created: "2024-03-13",
    updated: "2024-03-14",
    responses: 1,
  },
  {
    id: "TK-004",
    title: "Cafeteria Menu Concerns",
    description: "Multiple parents reporting food allergy concerns",
    status: "resolved",
    priority: "high",
    category: "administrative",
    assignee: "Lisa Anderson",
    reporter: "Parent Committee",
    created: "2024-03-10",
    updated: "2024-03-15",
    responses: 8,
  },
]

export function TicketsList() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-100 text-blue-800">Open</Badge>
      case "in-progress":
        return <Badge className="bg-orange-100 text-orange-800">In Progress</Badge>
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>
      case "closed":
        return <Badge className="bg-gray-100 text-gray-800">Closed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
      case "low":
        return <Badge variant="secondary">Low</Badge>
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ticketsData.map((ticket) => (
            <div key={ticket.id} className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-muted-foreground">{ticket.id}</span>
                  {getStatusBadge(ticket.status)}
                  {getPriorityBadge(ticket.priority)}
                </div>

                <h4 className="font-medium">{ticket.title}</h4>
                <p className="text-sm text-muted-foreground">{ticket.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Assigned: {ticket.assignee}
                  </div>
                  <div>Reporter: {ticket.reporter}</div>
                  <div>Created: {ticket.created}</div>
                  <div>Updated: {ticket.updated}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  {ticket.responses}
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
