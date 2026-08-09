import Image from 'next/image'
import HeroSocial from './HeroSocial'
import HeroStats from './HeroStats'

export default function HeroImage() {
  return (
    <div className="flex flex-col items-center gap-6 ps-2">
      <div className="relative z-10">
        <Image src="/client6.png" alt="profile" width={270} height={320} className="rounded-xl object-cover" />
      </div>

    <div className="w-full px-2 flex flex-col items-center gap-3 -mt-32 z-20 relative">
      <HeroSocial />
      <HeroStats />
       </div>
    </div>
  )
}
