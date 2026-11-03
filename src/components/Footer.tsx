import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <span className="text-orange-700">Horsforth</span> in{" "}
              <span className="text-green-700">Bloom</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Our volunteers meet on Wednesday afternoons to plant and maintain
              various green spaces across Horsforth, including raised beds along
              busy streets, fruit trees in community orchards and wildflower
              meadows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <span className="text-pink-700">Quick</span> Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-orange-700 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get in <span className="text-green-700">Touch</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-700" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-600 hover:text-orange-700 transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 text-pink-700" />
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-700 transition-colors text-sm"
                >
                  Follow us on Facebook
                </a>
              </div>
              {SOCIAL_LINKS.instagram ? (
                <div className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4 text-pink-700" />
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-700 text-sm"
                  >
                    Follow us on Instagram
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Horsforth in Bloom. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Visit our{" "}
              <Link
                href="/contact#links"
                className="text-orange-700 hover:underline"
              >
                useful links section
              </Link>{" "}
              for more local information
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
