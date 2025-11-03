import { Badge, Button, Card } from '@/components/ui'

export default function BookingPage() {
  return (
    <main className="px-3 pt-5 pb-6 space-y-6">
      <h1 className="text-lg font-semibold">Book a table</h1>

      <Card className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-neutral/60">Date</label>
            <input className="input mt-1" type="date" />
          </div>
          <div>
            <label className="text-xs text-neutral/60">Time</label>
            <input className="input mt-1" type="time" />
          </div>
          <div>
            <label className="text-xs text-neutral/60">Guests</label>
            <input className="input mt-1" type="number" min={1} defaultValue={2} />
          </div>
          <div>
            <label className="text-xs text-neutral/60">Occasion</label>
            <input className="input mt-1" placeholder="Birthday, casual..." />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge>Instant confirm</Badge>
          <span className="text-sm text-neutral/60">Free cancellation</span>
        </div>
        <Button>Find tables</Button>
      </Card>
    </main>
  )
}
