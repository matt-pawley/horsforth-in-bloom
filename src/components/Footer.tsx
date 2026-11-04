import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container py-12 sm:py-16">
        <div className="footer-grid">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">
              <span className="text-white">Horsforth</span> in{" "}
              <span className="text-white">Bloom</span>
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Our volunteers meet on Wednesday afternoons to plant and maintain
              various green spaces across Horsforth, including raised beds along
              busy streets, fruit trees in community orchards and wildflower
              meadows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              <span className="text-white">Quick</span> Links
            </h3>
            <ul className="footer-nav">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/75 hover:text-white transition-colors text-sm leading-relaxed break-words"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">
              Get in <span className="text-white">Touch</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-white/70"
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/75 hover:text-white transition-colors text-sm leading-relaxed break-words"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-white/70"
                />
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm leading-relaxed break-words"
                >
                  Follow us on Facebook
                </a>
              </div>
              {SOCIAL_LINKS.instagram ? (
                <div className="flex items-center gap-3">
                  <Instagram
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-white/70"
                  />
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 hover:text-white text-sm leading-relaxed"
                  >
                    Follow us on Instagram
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-between flex-1">
            <p className="text-white/65 text-sm leading-relaxed">
              © {new Date().getFullYear()} Horsforth in Bloom. All rights
              reserved.
            </p>
            <p className="text-white/65 text-sm">
              Visit our{" "}
              <Link
                href="/contact#links"
                className="text-white hover:underline"
              >
                useful links section
              </Link>{" "}
              for more local information
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
