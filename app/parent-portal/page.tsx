import { ParentDashboard } from "@/components/parent-portal/parent-dashboard"
import { StudentGrades } from "@/components/parent-portal/student-grades"
import { StudentAttendance } from "@/components/parent-portal/student-attendance"

export default function ParentPortalPage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Parent Portal</h1>
          <p className="text-muted-foreground">View your child's academic progress and school information</p>
        </div>
      </div>

      <ParentDashboard />
      <div className="grid gap-6 lg:grid-cols-2">
        <StudentGrades />
        <StudentAttendance />
      </div>
    </div>
  )
}
