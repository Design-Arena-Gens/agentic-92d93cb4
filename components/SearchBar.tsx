export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-surface border border-[color:hsl(var(--neutral)/0.1)] px-3 py-2">
      <svg className="icon" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="m20 20-3-3" stroke="currentColor" strokeWidth="1.5"/></svg>
      <input className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral/50" placeholder="Search dishes, places..." />
      <button className="btn btn-ghost px-2 py-1 text-xs">Filter</button>
    </div>
  )
}
