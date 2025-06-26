import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, CreditCard, Send } from "lucide-react"

const paymentsData = [
  {
    id: 1,
    studentName: "Emma Johnson",
    grade: "5th Grade",
    avatar: "/placeholder.svg",
    totalDue: 1250.0,
    amountPaid: 750.0,
    status: "partial",
    dueDate: "2024-03-15",
    lastPayment: "2024-02-15",
  },
  {
    id: 2,
    studentName: "Michael Chen",
    grade: "8th Grade",
    avatar: "/placeholder.svg",
    totalDue: 1350.0,
    amountPaid: 1350.0,
    status: "paid",
    dueDate: "2024-03-15",
    lastPayment: "2024-03-10",
  },
  {
    id: 3,
    studentName: "Sofia Rodriguez",
    grade: "11th Grade",
    avatar: "/placeholder.svg",
    totalDue: 1450.0,
    amountPaid: 0.0,
    status: "overdue",
    dueDate: "2024-02-15",
    lastPayment: null,
  },
  {
    id: 4,
    studentName: "James Wilson",
    grade: "3rd Grade",
    avatar: "/placeholder.svg",
    totalDue: 1150.0,
    amountPaid: 0.0,
    status: "pending",
    dueDate: "2024-03-20",
    lastPayment: null,
  },
]

export function PaymentsList() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>
      case "partial":
        return <Badge className="bg-yellow-100 text-yellow-800">Partial</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>
      case "pending":
        return <Badge className="bg-blue-100 text-blue-800">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Payment Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentsData.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={payment.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {payment.studentName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{payment.studentName}</h4>
                  <p className="text-sm text-muted-foreground">{payment.grade}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="font-medium">${payment.totalDue.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">Paid: ${payment.amountPaid.toFixed(2)}</p>
                </div>

                <div className="text-right">
                  <p className="text-sm">Due: {payment.dueDate}</p>
                  {payment.lastPayment && <p className="text-sm text-muted-foreground">Last: {payment.lastPayment}</p>}
                </div>

                {getStatusBadge(payment.status)}

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <CreditCard className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Send className="h-4 w-4" />
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
