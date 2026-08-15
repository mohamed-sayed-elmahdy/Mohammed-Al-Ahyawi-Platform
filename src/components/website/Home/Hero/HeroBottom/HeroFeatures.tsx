import FeatureItem from './FeatureItem'
import { heroFeatures } from '@/components/website/home/Hero/data'

export default function HeroFeatures() {
  return (
    <div className="rounded-2xl border border-amber-800 bg-black/40 p-6">
      <div className="grid grid-cols-4 gap-6">
        {heroFeatures.map((f) => (
          <FeatureItem key={f.id} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  )
}
