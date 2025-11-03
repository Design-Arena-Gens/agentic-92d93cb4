import MenuItemCard from '@/components/MenuItemCard'
import { Badge, Button, Card } from '@/components/ui'

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const menu = [
    { title: 'Spicy Umami Ramen', subtitle: 'Chili oil, egg, scallions', price: '$13.90' },
    { title: 'Crispy Gyoza', subtitle: 'Pork, cabbage, soy', price: '$8.50' },
    { title: 'Miso Bowl', subtitle: 'Tofu, sesame greens', price: '$11.20' },
  ]

  return (
    <main className="px-3 pb-24">
      <header className="pt-5 space-y-3">
        <div className="aspect-[16/9] rounded-xl bg-[conic-gradient(from_180deg,_hsl(var(--secondary)),_transparent_70%)] border border-[color:hsl(var(--neutral)/0.08)]" />
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold">Umami Street</h1>
            <div className="text-sm text-neutral/60">Asian Fusion ? $$</div>
            <div className="mt-1"><Badge>15-25m</Badge></div>
          </div>
          <Button className="px-3 py-2">Book</Button>
        </div>
      </header>

      <section className="mt-5 space-y-3">
        <div className="tabbar">
          <div className="tab tab-active text-center">Menu</div>
          <div className="tab text-center">Info</div>
          <div className="tab text-center">Reviews</div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {menu.map((m) => (
            <MenuItemCard key={m.title} {...m} />
          ))}
        </div>
      </section>

      <Card className="fixed bottom-20 left-0 right-0 mx-auto max-w-screen-md m-3 p-3 flex items-center justify-between">
        <div>
          <div className="text-sm">3 items</div>
          <div className="font-semibold">$34.60 total</div>
        </div>
        <Button className="px-4 py-3">Review order</Button>
      </Card>
    </main>
  )
}
