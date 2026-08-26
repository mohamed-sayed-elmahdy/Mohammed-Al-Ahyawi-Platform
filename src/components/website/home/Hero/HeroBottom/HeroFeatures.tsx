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
      dir="rtl"
      className="rounded-3xl border border-amber-400/25 bg-black/55 p-3 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-4"
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {features.map(({ title, icon: Icon }, index) => (
          <div
            key={title}
            className="group flex items-center gap-3 rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-amber-300/35 hover:bg-amber-400/10"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300 ring-1 ring-inset ring-amber-300/25 transition duration-300 group-hover:bg-amber-400 group-hover:text-black">
              <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <span className="mb-1 block text-xs font-medium tracking-[0.18em] text-amber-400/70">
                0{index + 1}
              </span>
              <h3 className="text-sm font-bold leading-snug text-amber-50">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
