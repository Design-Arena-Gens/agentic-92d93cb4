import { clsx } from 'clsx'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import type { Route } from 'next'

export function Button({ className, ...props }: ComponentProps<'button'>) {
  return <button className={clsx('btn btn-primary', className)} {...props} />
}

export function GhostButton({ className, ...props }: ComponentProps<'button'>) {
  return <button className={clsx('btn btn-ghost', className)} {...props} />
}

export function OutlineButton({ className, ...props }: ComponentProps<'button'>) {
  return <button className={clsx('btn btn-outline', className)} {...props} />
}

export function Badge({ className, ...props }: ComponentProps<'span'>) {
  return <span className={clsx('badge', className)} {...props} />
}

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx('card', className)} {...props} />
}

export function Tabbar({ items, active }: { items: string[]; active: string }) {
  return (
    <div className="tabbar">
      {items.map((label) => (
        <div key={label} className={clsx('tab text-center', { 'tab-active': label === active })}>{label}</div>
      ))}
    </div>
  )
}

export function NavLink({ href, label, icon }: { href: Route; label: string; icon?: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-surface">
      {icon}
      <span>{label}</span>
    </Link>
  )
}
