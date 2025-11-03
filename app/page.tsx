import SearchBar from '@/components/SearchBar'
import RestaurantCard from '@/components/RestaurantCard'
import { Badge, Card, OutlineButton } from '@/components/ui'

const restaurants = [
  { id: '1', name: 'Flame & Fork', category: 'Grill, Burgers', eta: '20-30m', price: '$$', rating: 4.7 },
  { id: '2', name: 'Umami Street', category: 'Asian Fusion', eta: '15-25m', price: '$$', rating: 4.6 },
  { id: '3', name: 'Rosa Pasta Bar', category: 'Italian', eta: '25-35m', price: '$$', rating: 4.8 },
]

export default function HomePage() {
  return (
    <main className="px-3 pt-5 pb-6 space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <div className="text-xs text-neutral/60">Delivering to</div>
          <div className="font-semibold">Work ? 123 Main St</div>
        </div>
        <OutlineButton className="px-3 py-2">Change</OutlineButton>
      </header>

      <SearchBar />

      {/* Quick actions */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {['Near me', 'Under 20m', 'Top rated', 'Deals'].map((f) => (
          <button key={f} className="badge whitespace-nowrap">{f}</button>
        ))}
      </div>

      {/* Hero */}
      <Card className="p-4 flex items-center justify-between">
        <div>
          <div className="text-sm text-neutral/60">This week</div>
          <div className="mt-1 text-lg font-semibold">Warm picks just for you</div>
          <div className="mt-2">
            <Badge>Free delivery</Badge>
          </div>
        </div>
        <div className="h-16 w-16 rounded-xl bg-[conic-gradient(from_180deg,_hsl(var(--secondary)),_transparent_70%)]" />
      </Card>

      {/* Sections */}
      <section className="space-y-3">
        <h2 className="font-semibold">Popular nearby</h2>
        <div className="grid grid-cols-1 gap-4">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">For quick decisions</h2>
        <div className="grid grid-cols-2 gap-3">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan', 'Coffee'].map((c) => (
            <div key={c} className="card p-3 text-center text-sm font-medium hover:shadow-soft">{c}</div>
          ))}
        </div>
      </section>
    </main>
  )
}
