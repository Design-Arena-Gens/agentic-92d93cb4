import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { clsx } from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Nosh ? Find. Book. Enjoy.',
  description: 'Discover food experiences. Order fast. Book with confidence.',
  themeColor: '#FF5A5F',
}

const NavIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'home':
      return (
        <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M3 10.5 12 4l9 6.5V20a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      )
    case 'heart':
      return (
        <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.5-9-8.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9 5.5C19 15.5 12 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      )
    case 'bag':
      return (
        <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Zm3 0a3 3 0 1 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      )
    case 'track':
      return (
        <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 4h10l6 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5"/><path d="M14 4v6h6" stroke="currentColor" strokeWidth="1.5"/></svg>
      )
    case 'user':
      return (
        <svg className="icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5"/></svg>
      )
    default:
      return null
  }
}

function BottomNav() {
  const items = [
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/favorites', label: 'Saved', icon: 'heart' },
    { href: '/orders', label: 'Orders', icon: 'bag' },
    { href: '/track', label: 'Track', icon: 'track' },
    { href: '/profile', label: 'Profile', icon: 'user' },
  ] as const

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-bottom">
      <div className="mx-auto max-w-screen-md px-3">
        <div className="bg-surface/95 backdrop-blur border border-[color:hsl(var(--neutral)/0.08)] rounded-2xl px-2 py-2 shadow-soft">
          <ul className="grid grid-cols-5">
            {items.map((i) => (
              <li key={i.href} className="flex items-center justify-center">
                <Link href={i.href} className="group flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs text-neutral/60 hover:text-neutral">
                  <span className="group-hover:text-primary"><NavIcon name={i.icon} /></span>
                  <span>{i.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(inter.variable)}>
      <body className="min-h-dvh bg-background gradient-hero">
        <div className="mx-auto max-w-screen-md pb-24">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  )
}
