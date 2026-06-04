"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape (returning focus to the toggle) and lock body scroll while open
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[52px] border-b border-gray-100 bg-white/80 backdrop-blur-md dark:bg-white/60 dark:backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-[980px] items-center justify-between px-5">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Lumis Studios — Home">
          <Image
            src="/lumis-logo-primary-light.svg"
            alt="Lumis Studios"
            width={84}
            height={36}
            priority
            className="dark:invert"
          />
        </Link>

        <div className="flex items-center">
          {/* Desktop nav — hidden from keyboard/AT when mobile menu is open */}
          <nav
            className="hidden items-center md:flex"
            aria-label="Main navigation"
            inert={open || undefined}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`cursor-pointer px-4 py-[14px] text-sm transition-colors duration-200 ${
                  pathname === l.href
                    ? "font-medium text-gray-800"
                    : "text-gray-400 hover:text-gray-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile hamburger — 44px touch target */}
          <button
            ref={toggleRef}
            className="-mr-3 flex h-11 w-11 items-center justify-center text-gray-800 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white/95 px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`cursor-pointer py-3 text-sm transition-colors duration-200 ${
                  pathname === l.href
                    ? "font-medium text-gray-800"
                    : "text-gray-400 hover:text-gray-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
