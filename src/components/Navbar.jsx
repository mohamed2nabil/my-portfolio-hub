"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Web development", href: "/web-dev" },
  { name: "Data analysis", href: "/data-analysis" },
  { name: "Data engineering", href: "/data-engineer" },
  { name: "AI automation", href: "/ai-automation" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-ground/90 backdrop-blur-xl">
    <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
      <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-ink">Mohamed<span className="text-ink-blue">.</span></Link>
      <div className="hidden items-center gap-6 lg:flex">{navLinks.map((link) => <NavLink key={link.href} link={link} active={pathname === link.href} />)}<Link href="/#contact" className="button-primary px-4 py-2 text-xs">Start a conversation</Link></div>
      <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-hairline text-ink lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    {open && <div id="mobile-menu" className="border-t border-hairline bg-ground px-5 py-4 shadow-xl lg:hidden"><div className="mx-auto grid max-w-7xl gap-1">{navLinks.map((link) => <NavLink key={link.href} link={link} active={pathname === link.href} mobile onNavigate={() => setOpen(false)} />)}<Link href="/#contact" onClick={() => setOpen(false)} className="button-primary mt-3 px-4 py-3 text-center text-xs">Start a conversation</Link></div></div>}
  </header>;
}

function NavLink({ link, active, mobile = false, onNavigate }) {
  return <Link href={link.href} onClick={onNavigate} className={`rounded-xl px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-blue ${mobile ? "block" : ""} ${active ? "bg-ink/7 text-ink" : "text-secondary-ink hover:bg-ink/5 hover:text-ink"}`}>{link.name}</Link>;
}
