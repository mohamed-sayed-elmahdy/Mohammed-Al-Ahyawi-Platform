import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumBorderProps {
    children: ReactNode;
    className?: string;
}

export default function PremiumBorder({
    children,
    className,
}: PremiumBorderProps) {
    return (
        <div className={cn("relative rounded-[inherit] p-px ", className)}>
            {/* Metallic Border */}
            <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                    background: `
            conic-gradient(
              from 210deg,
              rgba(255,248,220,0.45),
              rgba(214,172,83,0.55),
              rgba(120,84,24,0.55),
              rgba(255,221,140,0.65),
              rgba(255,248,170,0.55)
            )
          `,
                }}
            />

            {/* Highlight */}
            <div
                className="absolute inset-px rounded-[inherit] pointer-events-none"
                style={{
                    background: `
            radial-gradient(
              circle at top,
              rgba(255,255,255,.06),
              transparent 40%
            )
          `,
                }}
            />

            {/* Content */}
            <div
                className="
          relative
          rounded-[inherit]
          bg-[#0F1520]/75
          backdrop-blur-xl
          px-3
          py-2
          flex
            gap-3
            justify-between
        "
                style={{
                    boxShadow: `
            inset 0 1px rgba(255,255,255,.05),
            0 0 20px rgba(214,172,83,.08)
          `,
                }}
            >
                {children}
            </div>
        </div>
    );
}