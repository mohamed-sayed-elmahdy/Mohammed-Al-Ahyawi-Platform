import { heroStats } from '@/components/website/Hero/data'

export default function HeroStats() {
  return (
    <div className="w-48 rounded-2xl border border-amber-800 bg-black/50 p-4 text-amber-200">
      {heroStats.map((s) => (
        <div key={s.id} className="flex items-center justify-between py-2">
          <div className="text-sm">{s.label}</div>
          <div className="text-lg font-semibold text-amber-300">{s.value}</div>
        </div>
      ))}
    </div>
  )
}
