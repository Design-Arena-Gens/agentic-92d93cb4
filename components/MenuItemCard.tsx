import { Button, Card } from './ui'

export default function MenuItemCard({ title, subtitle, price }: { title: string; subtitle: string; price: string }) {
  return (
    <Card className="p-3 flex items-center gap-3">
      <div className="h-16 w-16 rounded-md bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--secondary))_0%,_transparent_60%)] border border-[color:hsl(var(--neutral)/0.08)]" />
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-neutral/60">{subtitle}</div>
        <div className="mt-1 font-semibold">{price}</div>
      </div>
      <Button className="px-3 py-2">Add</Button>
    </Card>
  )
}
