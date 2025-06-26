import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, BookOpen, TrendingUp } from "lucide-react"

export function AcademicPerformance() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">At-Risk Students</CardTitle>
          <AlertTriangle className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">23</div>
          <p className="text-xs text-muted-foreground">Students needing intervention</p>
          <div className="flex gap-1 mt-2">
            <Badge variant="destructive" className="text-xs">
              8 Critical
            </Badge>
            <Badge variant="secondary" className="text-xs">
              15 Moderate
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Grade Compliance</CardTitle>
          <BookOpen className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">78%</div>
          <p className="text-xs text-muted-foreground">Teachers with updated grades</p>
          <Progress value={78} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-1">Due: End of week</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Academic Trends</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">+5.2%</div>
          <p className="text-xs text-muted-foreground">Average GPA improvement</p>
          <div className="text-xs text-muted-foreground mt-2">
            <div>Current: 3.42</div>
            <div>Previous: 3.25</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
