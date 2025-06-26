import { FinancialOverview } from "@/components/dashboard/financial-overview"
import { SchoolCommunity } from "@/components/dashboard/school-community"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CEDU Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Principal Johnson. Here's your school's overview for today.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleString()}</div>
      </div>

      {/* Financial Health */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Financial Health</h2>
        <FinancialOverview />
      </div>

      {/* School Community */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">School Community</h2>
        <SchoolCommunity />
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  )
}
