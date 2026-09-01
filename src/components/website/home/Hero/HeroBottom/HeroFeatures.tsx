import { Compass, Handshake, ShieldCheck, TrendingUp, Zap } from 'lucide-react'

const features = [
  { title: 'قوة توجيه', icon: Compass },
  { title: 'بناء ثقة مستدامة', icon: Handshake },
  { title: 'تأثير فوري', icon: Zap },
  { title: 'استثمار استراتيجي', icon: TrendingUp },
  { title: 'أولوية وثبات رقمي', icon: ShieldCheck },
]

export default function HeroFeatures() {
  return (
    <div
    
      className="sm:max-w-11/12 mx-auto rounded-2xl border border-(--color-accent)/75 bg-black/55 p-2 sm:p-3"
    >
      <div className="flex flex-wrap  sm:grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {features.map(({ title, icon: Icon }, index) => (
          <div
            key={title}
            className="group flex items-center gap-3 rounded-2xl border border-transparent  px-2 sm:px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-amber-300/35 hover:bg-amber-400/10"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-(--color-accent)/10 border border-(--color-accent)/20 shadow-[3px_4px_20px_var(--color-accent)] text-[--color-accent] ring-1 ring-inset ring-amber-300/25 transition-all duration-300  group-hover:text-black">
              <Icon aria-hidden="true" className="size-5 text-(--color-accent)" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold leading-snug text-amber-50">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
