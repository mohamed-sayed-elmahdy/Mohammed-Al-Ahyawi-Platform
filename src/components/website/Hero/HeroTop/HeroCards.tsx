import Image from 'next/image'
import { heroCards } from '@/components/website/Hero/data'

export default function HeroCards() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 w-full">
      {heroCards.map((c) => (
        <div key={c.id} className="relative rounded-lg border border-amber-800 p-3 bg-black/40">
          <div className="h-36 w-full overflow-hidden rounded-md bg-gray-800">
            <Image src={c.img} alt={c.title} width={420} height={240} className="object-cover" />
          </div>
          <div className="mt-2 text-sm text-amber-200">{c.title}</div>
          <div className="text-xs text-amber-400">{c.subtitle}</div>
        </div>
      ))}
    </div>
  )
}
