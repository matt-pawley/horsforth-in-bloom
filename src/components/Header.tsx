"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Menu, X } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkStyles = (href: string, hoverColor: string, hoverBg: string) => {
    const isActive = pathname === href;
    const baseStyles =
      "px-4 py-2 rounded-lg text-gray-700 transition-all duration-200 font-medium";
    const activeStyles = isActive
      ? `${hoverColor} ${hoverBg}`
      : `hover:${hoverColor} hover:${hoverBg}`;
    return `${baseStyles} ${activeStyles}`;
  };

  const getMobileLinkStyles = (
    href: string,
    hoverColor: string,
    hoverBg: string,
  ) => {
    const isActive = pathname === href;
    const baseStyles =
      "px-4 py-3 rounded-lg text-gray-700 transition-all duration-200 font-medium";
    const activeStyles = isActive
      ? `${hoverColor} ${hoverBg}`
      : `hover:${hoverColor} hover:${hoverBg}`;
    return `${baseStyles} ${activeStyles}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="Horsforth in Bloom Logo"
              quality={100}
              height={60}
              width={163}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <Link
              href="/"
              className={getLinkStyles(
                "/",
                "text-orange-400",
                "bg-orange-400/15",
              )}
            >
              Home
            </Link>
            <Link
              href="/sites"
              className={getLinkStyles(
                "/sites",
                "text-green-400",
                "bg-green-400/15",
              )}
            >
              Sites Covered
            </Link>
            <Link
              href="/sustainability"
              className={getLinkStyles(
                "/sustainability",
                "text-pink-500",
                "bg-pink-500/15",
              )}
            >
              Sustainability
            </Link>
            <Link
              href="/history"
              className={getLinkStyles(
                "/history",
                "text-orange-400",
                "bg-orange-400/15",
              )}
            >
              History
            </Link>
            <Link
              href="/contact"
              className={getLinkStyles(
                "/contact",
                "text-green-400",
                "bg-green-400/15",
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Facebook Link */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Link
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Facebook className="h-4 w-4" />
                <span>Follow us</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-orange-400/20">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className={getMobileLinkStyles(
                  "/",
                  "text-orange-400",
                  "bg-orange-400/15",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sites"
                className={getMobileLinkStyles(
                  "/sites",
                  "text-green-400",
                  "bg-green-400/15",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sites Covered
              </Link>
              <Link
                href="/sustainability"
                className={getMobileLinkStyles(
                  "/sustainability",
                  "text-pink-500",
                  "bg-pink-500/15",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sustainability
              </Link>
              <Link
                href="/history"
                className={getMobileLinkStyles(
                  "/history",
                  "text-orange-400",
                  "bg-orange-400/15",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                History
              </Link>
              <Link
                href="/contact"
                className={getMobileLinkStyles(
                  "/contact",
                  "text-green-400",
                  "bg-green-400/15",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {/* Mobile Facebook Link */}
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <Link
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Follow us on Facebook</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
