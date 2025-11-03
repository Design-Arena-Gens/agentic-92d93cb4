import { Badge, Card, OutlineButton } from '@/components/ui'

export default function OrdersPage() {
  return (
    <main className="px-3 pt-5 pb-6 space-y-6">
      <h1 className="text-lg font-semibold">Your orders</h1>

      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Flame & Fork</div>
            <div className="text-sm text-neutral/60">2 items ? $24.80</div>
          </div>
          <Badge>Preparing</Badge>
        </div>
        <div className="text-sm">Estimated delivery in 18 min</div>
        <div className="flex items-center gap-2">
          <OutlineButton className="px-3 py-2">Contact</OutlineButton>
          <OutlineButton className="px-3 py-2">Support</OutlineButton>
        </div>
      </Card>

      <div className="text-sm text-neutral/60">No more active orders.</div>
    </main>
  )
}
