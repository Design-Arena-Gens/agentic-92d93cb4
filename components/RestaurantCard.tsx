import Link from 'next/link'
import { Badge, Card } from './ui'

export default function RestaurantCard({ id, name, category, eta, price, rating }: { id: string; name: string; category: string; eta: string; price: string; rating: number }) {
  return (
    <Link href={`/restaurant/${id}`}>
      <Card className="overflow-hidden">
        <div className="aspect-[16/9] bg-[conic-gradient(from_180deg,_hsl(var(--secondary)),_transparent_70%)]" />
        <div className="p-3 flex items-start gap-3">
          <div className="h-12 w-12 rounded-md bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--secondary))_0%,_transparent_60%)] border border-[color:hsl(var(--neutral)/0.08)]" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{name}</h3>
              <Badge>{eta}</Badge>
            </div>
            <div className="mt-1 text-sm text-neutral/60">{category} ? {price}</div>
            <div className="mt-1 text-sm"><span className="text-primary">?</span> {rating.toFixed(1)}</div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
