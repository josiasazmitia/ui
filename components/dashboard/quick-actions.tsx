import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Send, Users, GraduationCap, Calendar, BarChart3, MessageCircle, Settings } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common administrative tasks and reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <FileText className="h-5 w-5" />
            <span className="text-sm">Financial Report</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Send className="h-5 w-5" />
            <span className="text-sm">Mass Communication</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Users className="h-5 w-5" />
            <span className="text-sm">Personnel Management</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm">Student Directory</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <BarChart3 className="h-5 w-5" />
            <span className="text-sm">Analytics</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">Parent Portal</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Calendar className="h-5 w-5" />
            <span className="text-sm">Schedule Events</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Settings className="h-5 w-5" />
            <span className="text-sm">System Settings</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
