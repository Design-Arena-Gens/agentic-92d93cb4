import { Card, NavLink } from '@/components/ui'

export default function ProfilePage() {
  return (
    <main className="px-3 pt-5 pb-6 space-y-6">
      <h1 className="text-lg font-semibold">Profile</h1>

      <Card className="p-3">
        <div className="flex items-center gap-3 p-2">
          <div className="h-12 w-12 rounded-xl bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--secondary))_0%,_transparent_60%)] border border-[color:hsl(var(--neutral)/0.08)]" />
          <div className="flex-1">
            <div className="font-semibold">Alex Morgan</div>
            <div className="text-sm text-neutral/60">alex@example.com</div>
          </div>
        </div>
        <div className="mt-2 divide-y divide-[color:hsl(var(--neutral)/0.08)]">
          <NavLink href="/orders" label="Orders" />
          <NavLink href="/favorites" label="Saved" />
          <NavLink href="/booking" label="Bookings" />
          <NavLink href="#" label="Payment methods" />
          <NavLink href="#" label="Addresses" />
          <NavLink href="#" label="Settings" />
        </div>
      </Card>
    </main>
  )
}
