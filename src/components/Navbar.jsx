"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Web Dev", href: "/web-dev" },
  { name: "Data Analysis", href: "/data-analysis" },
  { name: "Data Engineer", href: "/data-engineer" },
  { name: "AI Automation", href: "/ai-automation" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 h-[58px] bg-ground/80 backdrop-blur-[12px] border-b border-hairline z-50 flex items-center px-6">
      <div className="flex-1 flex items-center">
        <Link href="/" className="font-serif text-[19px] text-ink font-semibold tracking-tight">
          M.Nabil<span className="text-ink-blue">.</span>
        </Link>
      </div>

      <div className="flex gap-6 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "font-mono text-xs uppercase tracking-widest transition-colors",
                isActive ? "text-ink-blue" : "text-secondary-ink hover:text-ink-blue"
              )}
            >
              {link.name}
            </Link>
          );
        })}
        <Link href="/#contact" className="flex items-center justify-center h-[34px] px-4 bg-ink text-ground font-mono text-xs uppercase tracking-widest hover:bg-ink-blue transition-colors rounded-none">
          Contact
        </Link>
      </div>
    </nav>
  );
}
