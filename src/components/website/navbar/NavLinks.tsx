
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navigation";

type NavLinksProps = {
  onNavigate?: () => void;
  className?: string;
  itemClassName?: string;
};

export default function NavLinks({
  onNavigate,
  className = "hidden items-center gap-8 lg:flex xl:gap-12",
  itemClassName,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={
                itemClassName ??
                `
                relative
                px-1
                pb-2
                text-sm
                font-semibold
                border-b-[1.5px]
                transition-[color,border-color]
                duration-300
                ${
                  isActive
                    ? "text-(--color-accent) border-(--color-accent)"
                    : "text-(--color-text) border-transparent hover:text-(--color-accent) hover:border-(--color-accent)"
                }
              `
              }
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}