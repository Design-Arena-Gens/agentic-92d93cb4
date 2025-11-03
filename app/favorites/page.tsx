import RestaurantCard from '@/components/RestaurantCard'

const saved = [
  { id: '2', name: 'Umami Street', category: 'Asian Fusion', eta: '15-25m', price: '$$', rating: 4.6 },
  { id: '3', name: 'Rosa Pasta Bar', category: 'Italian', eta: '25-35m', price: '$$', rating: 4.8 },
]

export default function FavoritesPage() {
  return (
    <main className="px-3 pt-5 pb-6 space-y-6">
      <h1 className="text-lg font-semibold">Saved places</h1>
      <div className="grid grid-cols-1 gap-4">
        {saved.map((r) => (
          <RestaurantCard key={r.id} {...r} />
        ))}
      </div>
    </main>
  )
}
