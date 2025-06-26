import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const upcomingEvents = [
  {
    title: "Parent-Teacher Conferences",
    date: "March 15-16, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Main Campus",
    type: "Academic",
    priority: "high",
  },
  {
    title: "Board Meeting",
    date: "March 20, 2024",
    time: "7:00 PM",
    location: "Conference Room A",
    type: "Administrative",
    priority: "high",
  },
  {
    title: "Spring Break",
    date: "March 25 - April 1, 2024",
    time: "All Day",
    location: "School Closed",
    type: "Holiday",
    priority: "medium",
  },
  {
    title: "Science Fair",
    date: "April 5, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Gymnasium",
    type: "Academic",
    priority: "medium",
  },
]

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Events
        </CardTitle>
        <CardDescription>Important school events and deadlines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{event.title}</h4>
                  <Badge variant={event.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                    {event.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
