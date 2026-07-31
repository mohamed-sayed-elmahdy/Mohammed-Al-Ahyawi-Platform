import Image from 'next/image'
import { heroCards } from '@/components/website/Home/Hero/data'
import AccentBorder from '@/components/shared/AccentBorder'

export default function HeroCards() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 justify-center 7 w-full">
      {heroCards.map((c) => (
        <AccentBorder key={c.id} className=" relative max-w-72" borderWidth={1}>
          <div className="h-36 w-full overflow-hidden rounded-md bg-gray-800">
            <Image src={c.img} alt={c.title} width={420} height={240} className="object-cover" />
          </div>
          <div className="absolute bottom-2 left-0 right-0">
            <div className="mt-2 text-sm text-amber-200">{c.title}</div>
          </div>
        </AccentBorder>
      ))}
    </div>
  )
}
