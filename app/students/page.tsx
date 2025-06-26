import { StudentsOverview } from "@/components/students/students-overview"
import { StudentsList } from "@/components/students/students-list"
import { StudentFilters } from "@/components/students/student-filters"

export default function StudentsPage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
          <p className="text-muted-foreground">Manage student records, enrollment, and academic information</p>
        </div>
      </div>

      <StudentsOverview />
      <StudentFilters />
      <StudentsList />
    </div>
  )
}
