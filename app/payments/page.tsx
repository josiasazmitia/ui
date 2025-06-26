import { PaymentsOverview } from "@/components/payments/payments-overview"
import { PaymentsList } from "@/components/payments/payments-list"
import { PaymentFilters } from "@/components/payments/payment-filters"

export default function PaymentsPage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payments & Collections</h1>
          <p className="text-muted-foreground">Manage billing, collections, and accounts receivable</p>
        </div>
      </div>

      <PaymentsOverview />
      <PaymentFilters />
      <PaymentsList />
    </div>
  )
}
