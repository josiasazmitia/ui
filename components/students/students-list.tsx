import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Edit, MessageSquare, FileText } from "lucide-react"

const studentsData = [
  {
    id: "STU-001",
    name: "Emma Johnson",
    grade: "5th Grade",
    age: 10,
    gpa: 3.8,
    attendance: 96,
    status: "active",
    parentName: "Michael Johnson",
    parentEmail: "m.johnson@email.com",
    parentPhone: "(555) 123-4567",
    avatar: "/placeholder.svg",
    academicStatus: "honor-roll",
    lastActivity: "2024-03-15",
  },
  {
    id: "STU-002",
    name: "Michael Chen",
    grade: "8th Grade",
    age: 13,
    gpa: 3.2,
    attendance: 89,
    status: "active",
    parentName: "Lisa Chen",
    parentEmail: "l.chen@email.com",
    parentPhone: "(555) 234-5678",
    avatar: "/placeholder.svg",
    academicStatus: "at-risk",
    lastActivity: "2024-03-14",
  },
  {
    id: "STU-003",
    name: "Sofia Rodriguez",
    grade: "11th Grade",
    age: 16,
    gpa: 4.0,
    attendance: 98,
    status: "active",
    parentName: "Carlos Rodriguez",
    parentEmail: "c.rodriguez@email.com",
    parentPhone: "(555) 345-6789",
    avatar: "/placeholder.svg",
    academicStatus: "gifted",
    lastActivity: "2024-03-15",
  },
  {
    id: "STU-004",
    name: "James Wilson",
    grade: "3rd Grade",
    age: 8,
    gpa: 3.5,
    attendance: 94,
    status: "active",
    parentName: "Sarah Wilson",
    parentEmail: "s.wilson@email.com",
    parentPhone: "(555) 456-7890",
    avatar: "/placeholder.svg",
    academicStatus: "regular",
    lastActivity: "2024-03-13",
  },
]

export function StudentsList() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
      case "graduated":
        return <Badge className="bg-blue-100 text-blue-800">Graduated</Badge>
      case "transferred":
        return <Badge className="bg-orange-100 text-orange-800">Transferred</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getAcademicStatusBadge = (academicStatus: string) => {
    switch (academicStatus) {
      case "honor-roll":
        return <Badge className="bg-purple-100 text-purple-800">Honor Roll</Badge>
      case "at-risk":
        return <Badge variant="destructive">At Risk</Badge>
      case "gifted":
        return <Badge className="bg-yellow-100 text-yellow-800">Gifted</Badge>
      case "special-needs":
        return <Badge className="bg-blue-100 text-blue-800">Special Needs</Badge>
      default:
        return null
    }
  }

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.5) return "text-green-600"
    if (gpa >= 3.0) return "text-blue-600"
    if (gpa >= 2.5) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Directory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {studentsData.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={student.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{student.name}</h4>
                    <span className="text-sm text-muted-foreground">({student.id})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{student.grade}</span>
                    <span>•</span>
                    <span>Age {student.age}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Parent: {student.parentName} • {student.parentEmail}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className={`font-medium ${getGPAColor(student.gpa)}`}>{student.gpa.toFixed(1)}</div>
                  <div className="text-xs text-muted-foreground">GPA</div>
                </div>

                <div className="text-center">
                  <div className="font-medium">{student.attendance}%</div>
                  <div className="text-xs text-muted-foreground">Attendance</div>
                </div>

                <div className="flex flex-col gap-1">
                  {getStatusBadge(student.status)}
                  {getAcademicStatusBadge(student.academicStatus)}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
