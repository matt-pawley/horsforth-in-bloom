"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setIsMobileMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-line"
    >
      <div className="site-container">
        <div className="flex justify-between items-center h-20 gap-6">
          <Link
            href="/"
            className="shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Horsforth in Bloom"
              className="w-36 sm:w-40 h-auto"
              quality={100}
              height={60}
              width={163}
            />
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-0.5"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`relative px-3 py-3 text-sm font-medium transition-colors ${pathname === href ? "text-forest after:absolute after:bottom-1 after:inset-x-3 after:h-0.5 after:bg-forest" : "text-muted-ink hover:text-forest"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button
            ref={menuButton}
            variant="outline"
            size="sm"
            className="lg:hidden min-h-11 min-w-11 p-2.5 border-line text-forest"
            aria-label={
              isMobileMenuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
        {isMobileMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="lg:hidden absolute top-full inset-x-0 flex flex-col gap-1 p-4 sm:px-8 bg-white border-b border-line shadow-[0_12px_20px_-16px_rgb(0_0_0/0.2)] max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`px-4 py-3 rounded-lg font-medium ${pathname === href ? "text-forest bg-mist" : "text-muted-ink hover:bg-mist"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
