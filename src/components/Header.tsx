"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 gap-6">
          <Link
            href="/"
            className="shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Horsforth in Bloom"
              quality={100}
              height={60}
              width={163}
            />
          </Link>
          <nav aria-label="Main navigation" className="hidden lg:flex gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${pathname === href ? "text-green-800 bg-green-50" : "text-gray-700 hover:text-green-800 hover:bg-green-50"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden min-h-11 min-w-11 border-orange-400 text-orange-700"
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
            className="lg:hidden flex flex-col gap-1 py-4 border-t border-orange-200"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`px-4 py-3 rounded-lg font-medium ${pathname === href ? "text-green-800 bg-green-50" : "text-gray-700 hover:bg-green-50"}`}
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
