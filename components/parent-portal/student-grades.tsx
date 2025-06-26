import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, TrendingUp, TrendingDown, Minus } from "lucide-react"

const gradesData = [
  {
    subject: "Mathematics",
    currentGrade: "A-",
    percentage: 92,
    trend: "up",
    assignments: [
      { name: "Quiz 1", grade: "A", points: "18/20", date: "2024-03-10" },
      { name: "Homework Set 3", grade: "A+", points: "25/25", date: "2024-03-08" },
      { name: "Midterm Exam", grade: "B+", points: "87/100", date: "2024-03-05" },
    ],
  },
  {
    subject: "English Language Arts",
    currentGrade: "A",
    percentage: 95,
    trend: "up",
    assignments: [
      { name: "Essay: Character Analysis", grade: "A", points: "48/50", date: "2024-03-12" },
      { name: "Reading Comprehension", grade: "A+", points: "20/20", date: "2024-03-09" },
      { name: "Vocabulary Test", grade: "A-", points: "18/20", date: "2024-03-06" },
    ],
  },
  {
    subject: "Science",
    currentGrade: "B+",
    percentage: 88,
    trend: "stable",
    assignments: [
      { name: "Lab Report: Photosynthesis", grade: "B+", points: "42/50", date: "2024-03-11" },
      { name: "Chapter 5 Quiz", grade: "A-", points: "18/20", date: "2024-03-07" },
      { name: "Science Fair Project", grade: "B", points: "80/100", date: "2024-03-01" },
    ],
  },
  {
    subject: "Social Studies",
    currentGrade: "A-",
    percentage: 90,
    trend: "down",
    assignments: [
      { name: "History Timeline Project", grade: "B+", points: "42/50", date: "2024-03-13" },
      { name: "Geography Quiz", grade: "A", points: "19/20", date: "2024-03-08" },
      { name: "Current Events Report", grade: "A+", points: "25/25", date: "2024-03-04" },
    ],
  },
]

export function StudentGrades() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getGradeBadge = (grade: string) => {
    const gradeColors: { [key: string]: string } = {
      "A+": "bg-green-100 text-green-800",
      A: "bg-green-100 text-green-800",
      "A-": "bg-green-100 text-green-800",
      "B+": "bg-blue-100 text-blue-800",
      B: "bg-blue-100 text-blue-800",
      "B-": "bg-blue-100 text-blue-800",
      "C+": "bg-yellow-100 text-yellow-800",
      C: "bg-yellow-100 text-yellow-800",
      "C-": "bg-yellow-100 text-yellow-800",
      D: "bg-orange-100 text-orange-800",
      F: "bg-red-100 text-red-800",
    }

    return <Badge className={gradeColors[grade] || "bg-gray-100 text-gray-800"}>{grade}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Academic Grades
          </CardTitle>
          <Select defaultValue="current">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Quarter</SelectItem>
              <SelectItem value="q1">Quarter 1</SelectItem>
              <SelectItem value="q2">Quarter 2</SelectItem>
              <SelectItem value="semester1">Semester 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {gradesData.map((subject, index) => (
            <div key={index} className="space-y-3">
              {/* Subject Header */}
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{subject.subject}</h3>
                  {getTrendIcon(subject.trend)}
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-medium">{subject.currentGrade}</div>
                    <div className="text-sm text-muted-foreground">{subject.percentage}%</div>
                  </div>
                  <Progress value={subject.percentage} className="w-20" />
                </div>
              </div>

              {/* Recent Assignments */}
              <div className="space-y-2 ml-4">
                <h4 className="text-sm font-medium text-muted-foreground">Recent Assignments</h4>
                {subject.assignments.map((assignment, assignmentIndex) => (
                  <div key={assignmentIndex} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{assignment.name}</div>
                      <div className="text-xs text-muted-foreground">{assignment.date}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{assignment.points}</span>
                      {getGradeBadge(assignment.grade)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
