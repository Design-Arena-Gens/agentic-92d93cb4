import { Card, Badge } from '@/components/ui'

export default function TrackPage() {
  const steps = [
    { label: 'Order placed', time: '12:05' },
    { label: 'Restaurant confirmed', time: '12:07' },
    { label: 'Preparing', time: '12:15' },
    { label: 'Picked up', time: '?' },
    { label: 'On the way', time: '?' },
    { label: 'Delivered', time: '?' },
  ]

  return (
    <main className="px-3 pt-5 pb-6 space-y-6">
      <h1 className="text-lg font-semibold">Track delivery</h1>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Flame & Fork</div>
            <div className="text-sm text-neutral/60">#A2X4 ? 2 items</div>
          </div>
          <Badge>ETA 18m</Badge>
        </div>
        <div className="mt-4 space-y-4">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-start gap-3">
              <div className="relative mt-1">
                <div className="h-3 w-3 rounded-full bg-primary" />
                {i < steps.length - 1 && (<div className="absolute left-1.5 top-3 h-8 w-px bg-[color:hsl(var(--neutral)/0.15)]" />)}
              </div>
              <div>
                <div className="font-medium">{s.label}</div>
                <div className="text-sm text-neutral/60">{s.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}
