"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-lg font-semibold leading-[1.5] ${
        isActive ? "text-primary" : "text-text-nav"
      }`}
    >
      {children}
    </Link>
  );
}
