import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GoldActionLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}

export default function GoldActionLink({
  href,
  children,
  ariaLabel,
  className,
}: GoldActionLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "discoveryButton discoveryButton-colors relative inline-flex min-w-38.75 items-center justify-center gap-2 rounded-[10px] px-2 py-3 text-sm font-semibold text-(--color-text) transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:px-6 sm:py-2",
        className,
      )}
    >
      {children}
      <ArrowLeft aria-hidden="true" className="size-5" />
    </Link>
  );
}
