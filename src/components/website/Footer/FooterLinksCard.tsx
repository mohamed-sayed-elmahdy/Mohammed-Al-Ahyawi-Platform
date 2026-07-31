import Link from "next/link";
import { IconType } from "react-icons";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { cn } from "@/lib/utils";

export interface FooterLinksCardItem {
  label: string;
  href: string;
  icon: IconType;
  external?: boolean;
}

interface FooterLinksCardProps {
  title: string;
  items: readonly FooterLinksCardItem[];
  className?: string;
}

export default function FooterLinksCard({
  title,
  items,
  className,
}: FooterLinksCardProps) {
  return (
    <section
      className={cn(
        "group text-center xl:text-right",
        className
      )}
    >
      <div
        className="
          relative
          rounded-[22px]
          p-px
          transition-all
          duration-500
          group-hover:scale-[1.015]
          group-hover:shadow-[0_18px_28px_rgba(0,0,0,.35),0_14px_16px_rgba(243,193,92,.10)]
        "
      >
        {/* Animated Golden Border */}
        <div
          className="
            absolute
            inset-0
            rounded-[inherit]
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
          style={{
            background: `
              conic-gradient(
                from 210deg,
                rgba(255,248,220,.45),
                rgba(214,172,83,.60),
                rgba(120,84,24,.55),
                rgba(255,221,140,.65),
                rgba(255,248,170,.50)
              )
            `,
          }}
        />

        {/* Card */}
        <div
          className="
            relative
            rounded-[inherit]
            bg-[#0F1520]/75
            backdrop-blur-xl
            px-5
            py-6
            transition-all
            duration-500
            group-hover:bg-[#121a28]/82
          "
          style={{
            boxShadow: `
              inset 0 1px rgba(255,255,255,.05),
              0 0 20px rgba(214,172,83,.08)
            `,
          }}
        >
          <h3 className="font-alexandria text-lg font-semibold text-white">
            {title}
          </h3>

          <div className="mt-7 divide-y divide-white/10">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group/item
                    flex
                    min-h-[58px]
                    items-center
                    gap-3
                    text-[15px]
                    text-slate-200
                    transition-all
                    duration-300
                    hover:text-(--color-accent)
                  "
                >
                  <Icon
                    className="
                      shrink-0
                      text-[24px]
                      text-(--color-accent)
                      transition-transform
                      duration-300
                      group-hover/item:scale-110
                    "
                  />

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {item.external && (
                    <HiArrowTopRightOnSquare
                      className="
                        text-lg
                        text-(--color-accent)
                        opacity-70
                        transition-all
                        duration-300
                        group-hover/item:translate-x-[-2px]
                        group-hover/item:-translate-y-[2px]
                        group-hover/item:opacity-100
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}