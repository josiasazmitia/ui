import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, MessageSquare, Bell } from "lucide-react"

export function SchoolCommunity() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Enrollment</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,247</div>
          <div className="text-xs text-muted-foreground mt-2">
            <div>Elementary: 456</div>
            <div>Middle: 389</div>
            <div>High: 402</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Enrollment Pipeline</CardTitle>
          <UserPlus className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">34</div>
          <p className="text-xs text-muted-foreground">New applications in progress</p>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              12 Pending
            </Badge>
            <Badge variant="outline" className="text-xs">
              22 Reviewing
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Tickets</CardTitle>
          <MessageSquare className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">12</div>
          <p className="text-xs text-muted-foreground">Parent/Staff requests</p>
          <div className="flex gap-1 mt-2">
            <Badge variant="destructive" className="text-xs">
              3 Urgent
            </Badge>
            <Badge variant="secondary" className="text-xs">
              9 Normal
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
          <Bell className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <p className="text-xs text-muted-foreground">Requiring your attention</p>
          <Badge variant="outline" className="mt-2 text-xs">
            2 from Board
          </Badge>
        </CardContent>
      </Card>
    </div>
  )
}
