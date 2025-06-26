import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Users, Megaphone, Bell, MessageCircle, Mail } from "lucide-react"

export function CommunicationActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication Tools</CardTitle>
        <CardDescription>Send messages, announcements, and notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Send className="h-5 w-5" />
            <span className="text-sm">Send Message</span>
            <span className="text-xs text-muted-foreground">Individual message</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Users className="h-5 w-5" />
            <span className="text-sm">Mass Communication</span>
            <span className="text-xs text-muted-foreground">Send to multiple recipients</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Megaphone className="h-5 w-5" />
            <span className="text-sm">School Announcement</span>
            <span className="text-xs text-muted-foreground">Public announcements</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Bell className="h-5 w-5" />
            <span className="text-sm">Push Notification</span>
            <span className="text-xs text-muted-foreground">Instant alerts</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">SMS/WhatsApp</span>
            <span className="text-xs text-muted-foreground">Mobile messaging</span>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Mail className="h-5 w-5" />
            <span className="text-sm">Email Campaign</span>
            <span className="text-xs text-muted-foreground">Bulk email sending</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
