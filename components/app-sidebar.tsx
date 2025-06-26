"use client"

import type * as React from "react"
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Users,
  DollarSign,
  GraduationCap,
  MessageSquare,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Principal Johnson",
    email: "p.johnson@cedu.edu",
    avatar: "/avatars/principal.jpg",
  },
  teams: [
    {
      name: "Lincoln Elementary",
      logo: GalleryVerticalEnd,
      plan: "Main Campus",
    },
    {
      name: "Roosevelt Middle",
      logo: AudioWaveform,
      plan: "Branch Campus",
    },
    {
      name: "Washington High",
      logo: Command,
      plan: "Branch Campus",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Students",
      url: "/students",
      icon: GraduationCap,
      items: [
        {
          title: "Student Directory",
          url: "/students",
        },
        {
          title: "Enrollment",
          url: "/students/enrollment",
        },
        {
          title: "Academic Records",
          url: "/students/records",
        },
        {
          title: "Attendance",
          url: "/students/attendance",
        },
      ],
    },
    {
      title: "Finance",
      url: "/payments",
      icon: DollarSign,
      items: [
        {
          title: "Billing & Payments",
          url: "/payments",
        },
        {
          title: "Collections",
          url: "/payments/collections",
        },
        {
          title: "Financial Reports",
          url: "/payments/reports",
        },
        {
          title: "Budget Management",
          url: "/payments/budget",
        },
      ],
    },
    {
      title: "Communications",
      url: "/communications",
      icon: MessageSquare,
      items: [
        {
          title: "Messages",
          url: "/communications",
        },
        {
          title: "Announcements",
          url: "/communications/announcements",
        },
        {
          title: "Parent Portal",
          url: "/parent-portal",
        },
        {
          title: "Staff Communications",
          url: "/communications/staff",
        },
      ],
    },
    {
      title: "Support",
      url: "/tickets",
      icon: MessageSquare,
      items: [
        {
          title: "Tickets",
          url: "/tickets",
        },
        {
          title: "Knowledge Base",
          url: "/tickets/kb",
        },
        {
          title: "Reports",
          url: "/tickets/reports",
        },
      ],
    },
    {
      title: "Staff",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Employee Directory",
          url: "#",
        },
        {
          title: "Payroll",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Professional Development",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "School Settings",
          url: "#",
        },
        {
          title: "User Management",
          url: "#",
        },
        {
          title: "System Configuration",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Academic Year 2024-25",
      url: "#",
      icon: Frame,
    },
    {
      name: "Parent Engagement Initiative",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Technology Upgrade",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
