import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Reply, Archive, Star } from "lucide-react"

const messagesData = [
  {
    id: 1,
    from: "Mrs. Sarah Johnson",
    role: "Math Teacher",
    subject: "Emma's Progress in Mathematics",
    preview: "I wanted to update you on Emma's recent improvement in algebra. She has been showing great...",
    timestamp: "2 hours ago",
    isRead: false,
    isStarred: true,
    priority: "normal",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    from: "Principal Davis",
    role: "Principal",
    subject: "Parent-Teacher Conference Scheduling",
    preview: "Dear parents, we are now scheduling parent-teacher conferences for the upcoming quarter...",
    timestamp: "1 day ago",
    isRead: true,
    isStarred: false,
    priority: "high",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    from: "Ms. Lisa Chen",
    role: "English Teacher",
    subject: "Reading Assignment Feedback",
    preview: "Emma did an excellent job on her latest book report. Her analysis of the main character...",
    timestamp: "2 days ago",
    isRead: true,
    isStarred: false,
    priority: "normal",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    from: "School Nurse",
    role: "Health Office",
    subject: "Health Records Update Required",
    preview: "Please update Emma's emergency contact information and any new medical conditions...",
    timestamp: "3 days ago",
    isRead: false,
    isStarred: false,
    priority: "high",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    from: "Coach Martinez",
    role: "PE Teacher",
    subject: "Sports Day Participation",
    preview: "Emma has been selected to participate in the upcoming sports day events. Please confirm...",
    timestamp: "1 week ago",
    isRead: true,
    isStarred: true,
    priority: "normal",
    avatar: "/placeholder.svg",
  },
]

export function MessagesList() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="destructive" className="text-xs">
            High Priority
          </Badge>
        )
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 text-xs">Medium</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Messages & Communications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {messagesData.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer ${
                !message.isRead ? "bg-blue-50 border-blue-200" : ""
              }`}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={message.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {message.from
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className={`font-medium ${!message.isRead ? "font-semibold" : ""}`}>{message.from}</h4>
                    <Badge variant="outline" className="text-xs">
                      {message.role}
                    </Badge>
                    {getPriorityBadge(message.priority)}
                  </div>
                  <div className="flex items-center gap-2">
                    {message.isStarred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  </div>
                </div>

                <h5 className={`text-sm ${!message.isRead ? "font-semibold" : "font-medium"}`}>{message.subject}</h5>

                <p className="text-sm text-muted-foreground line-clamp-2">{message.preview}</p>

                <div className="flex items-center gap-2 pt-2">
                  <Button variant="outline" size="sm">
                    <Reply className="h-3 w-3 mr-1" />
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Archive className="h-3 w-3 mr-1" />
                    Archive
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Star className="h-3 w-3 mr-1" />
                    {message.isStarred ? "Unstar" : "Star"}
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
