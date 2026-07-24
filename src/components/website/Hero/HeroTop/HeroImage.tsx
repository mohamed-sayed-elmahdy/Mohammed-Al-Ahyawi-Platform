import Image from 'next/image'
import HeroSocial from './HeroSocial'
import HeroStats from './HeroStats'

export default function HeroImage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative rounded-2xl border border-amber-800 p-4 bg-black/50">
        <Image src="/man.png" alt="profile" width={220} height={320} className="rounded-xl object-cover" />
      </div>

      <HeroSocial />
      <HeroStats />
    </div>
  )
}
