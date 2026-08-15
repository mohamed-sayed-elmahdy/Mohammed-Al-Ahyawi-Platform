import { heroStats } from '@/components/website/home/Hero/data'
import PremiumBorder from './PremiumBorder';
export default function HeroStats() {
  return (
    <PremiumBorder className="rounded-md w-full  text-(--color-text)">

<div className="flex flex-col w-full">
      {heroStats.map((s) => (
        <div key={s.id} className="flex items-center justify-between py-2">
          <div className="text-sm">{s.label}</div>
          <div className="text-lg font-semibold text-(--color-accent)">{s.value}</div>
        </div>
      ))}
    </div>

    </PremiumBorder>
  )
}
