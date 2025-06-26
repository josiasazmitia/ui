import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, Settings } from "lucide-react"

export function OperationalEfficiency() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Platform Activity</CardTitle>
          <Activity className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <p className="text-xs text-muted-foreground">Teachers active this week</p>
          <div className="text-xs text-muted-foreground mt-1">Parents: 76% active</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
          <Settings className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">3</div>
          <p className="text-xs text-muted-foreground">Requiring immediate attention</p>
          <div className="flex flex-col gap-1 mt-2">
            <Badge variant="destructive" className="text-xs">
              Server Backup
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Contract Renewal
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Staff Attendance</CardTitle>
          <Users className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94%</div>
          <p className="text-xs text-muted-foreground">Present today</p>
          <div className="text-xs text-muted-foreground mt-1">3 on leave, 2 absent</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Health</CardTitle>
          <Activity className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">99.8%</div>
          <p className="text-xs text-muted-foreground">Uptime this month</p>
          <Badge variant="outline" className="mt-2 text-xs text-green-600">
            All Systems Operational
          </Badge>
        </CardContent>
      </Card>
    </div>
  )
}
