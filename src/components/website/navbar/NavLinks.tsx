"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-12">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
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
              `}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}