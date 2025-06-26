import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

const attendanceData = {
  summary: {
    totalDays: 120,
    presentDays: 115,
    absentDays: 3,
    tardyDays: 2,
    attendanceRate: 95.8,
  },
  recentRecords: [
    { date: "2024-03-15", status: "present", time: "8:00 AM", notes: "" },
    { date: "2024-03-14", status: "present", time: "8:05 AM", notes: "Slightly late" },
    { date: "2024-03-13", status: "present", time: "7:58 AM", notes: "" },
    { date: "2024-03-12", status: "absent", time: "", notes: "Sick - Doctor's note provided" },
    { date: "2024-03-11", status: "present", time: "8:00 AM", notes: "" },
    { date: "2024-03-08", status: "tardy", time: "8:15 AM", notes: "Traffic delay" },
    { date: "2024-03-07", status: "present", time: "7:55 AM", notes: "" },
    { date: "2024-03-06", status: "present", time: "8:02 AM", notes: "" },
  ],
  monthlyBreakdown: [
    { month: "September", present: 20, absent: 0, tardy: 1, rate: 95.2 },
    { month: "October", present: 22, absent: 1, tardy: 0, rate: 95.7 },
    { month: "November", present: 18, absent: 0, tardy: 0, rate: 100 },
    { month: "December", present: 15, absent: 1, tardy: 0, rate: 93.8 },
    { month: "January", present: 21, absent: 0, tardy: 1, rate: 95.5 },
    { month: "February", present: 19, absent: 1, tardy: 0, rate: 95.0 },
    { month: "March", present: 10, absent: 0, tardy: 0, rate: 100 },
  ],
}

export function StudentAttendance() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "absent":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "tardy":
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-green-100 text-green-800">Present</Badge>
      case "absent":
        return <Badge className="bg-red-100 text-red-800">Absent</Badge>
      case "tardy":
        return <Badge className="bg-orange-100 text-orange-800">Tardy</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Attendance Record
          </CardTitle>
          <Select defaultValue="current">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Year</SelectItem>
              <SelectItem value="semester1">Semester 1</SelectItem>
              <SelectItem value="semester2">Semester 2</SelectItem>
              <SelectItem value="quarter">Current Quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Attendance Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{attendanceData.summary.presentDays}</div>
              <div className="text-sm text-muted-foreground">Present Days</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{attendanceData.summary.absentDays}</div>
              <div className="text-sm text-muted-foreground">Absent Days</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{attendanceData.summary.tardyDays}</div>
              <div className="text-sm text-muted-foreground">Tardy Days</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{attendanceData.summary.attendanceRate}%</div>
              <div className="text-sm text-muted-foreground">Attendance Rate</div>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Attendance Rate</span>
              <span className="font-medium">{attendanceData.summary.attendanceRate}%</span>
            </div>
            <Progress value={attendanceData.summary.attendanceRate} className="h-2" />
          </div>

          {/* Recent Attendance Records */}
          <div className="space-y-3">
            <h3 className="font-medium">Recent Attendance</h3>
            <div className="space-y-2">
              {attendanceData.recentRecords.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(record.status)}
                    <div>
                      <div className="font-medium">{record.date}</div>
                      {record.time && <div className="text-sm text-muted-foreground">Arrived: {record.time}</div>}
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(record.status)}
                    {record.notes && <div className="text-xs text-muted-foreground mt-1 max-w-48">{record.notes}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Breakdown */}
          <div className="space-y-3">
            <h3 className="font-medium">Monthly Breakdown</h3>
            <div className="space-y-2">
              {attendanceData.monthlyBreakdown.map((month, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <div className="font-medium">{month.month}</div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-600">Present: {month.present}</span>
                    <span className="text-red-600">Absent: {month.absent}</span>
                    <span className="text-orange-600">Tardy: {month.tardy}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{month.rate}%</span>
                      <Progress value={month.rate} className="w-16 h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
