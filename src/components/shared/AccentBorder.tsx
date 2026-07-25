
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  animation?: string;
  borderWidth?: number;
}

function AccentBorder(
  { children,
    className,
    ariaLabel,
    animation,
    // القيمة الافتراضية = نفس p-0.5 تقريباً
    borderWidth = 2,
  }: PrimaryButtonProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "group relative overflow-hidden rounded-[14px]",
        className
      )}>
      {/* Gold Border */}
      <div
        className="
          absolute
          inset-0
          rounded-[14px]
          bg-[linear-gradient(135deg,#3d2a10_0%,#8d6323_18%,#f5d17a_34%,#7e571f_48%,#3c2810_65%,#f4ca71_83%,#5d4017_100%)]
          group-hover:brightness-110
          transition-all
          duration-500
        "
        style={{
          padding: `${borderWidth}px`,
        }}
      >
        <div
          className="
            h-full
            w-full
            rounded-[12px]
            bg-(--color-button-surface)
          "
        />
      </div>

      {/* Outer Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[14px]
          opacity-70
          transition-all
          duration-500
          shadow-[0_0_25px_rgba(255,184,61,.15)]
          group-hover:shadow-[0_0_34px_rgba(243,193,92,.22)]
        "
      />

      {/* Background */}
      <div
        className="
          absolute
          inset-[2px]
          rounded-[12px]
          bg-[radial-gradient(circle_at_50%_30%,#27231b_10%,#171717_55%,#0c0c0c_100%)]
        "
      />

      {/* Spotlight */}
      <div
        className="
          absolute
        inset-0.5
          rounded-xl
          pointer-events-none
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(180px circle at var(--x) var(--y), rgba(243,193,92,.18), transparent 65%)",
        }}
      />

      {/* Inner Shadow */}
      <div
        className="
          absolute
          inset-0.5
          rounded-xl
          shadow-[inset_0_2px_5px_rgba(255,255,255,.06),inset_0_-5px_12px_rgba(0,0,0,.8)]
        "
      />

      {/* Content */}
      <span
        className="
          relative
          z-20
          flex
          items-center
          justify-center
          gap-2
          px-0.5
          py-0.5
          text-base
          font-bold
          text-(--color-text)
          drop-shadow-[0_0_6px_rgba(255,199,94,.35)]
          transition-all
          duration-300
        "
      >
        {children}
      </span>

    </div>
  )
}

export default AccentBorder