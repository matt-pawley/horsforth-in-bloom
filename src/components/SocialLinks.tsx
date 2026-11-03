import { Facebook, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialLinks() {
  return (
    <details className="relative self-end mx-4 my-4 lg:fixed lg:bottom-4 lg:right-4 lg:m-0 z-40 group">
      <summary className="cursor-pointer list-none rounded-full border border-pink-200 bg-white px-4 py-3 text-pink-700 shadow-lg focus-visible:outline-2 focus-visible:outline-pink-700">
        <span className="flex items-center gap-2">
          <Facebook aria-hidden="true" className="h-5 w-5" /> Social media
        </span>
      </summary>
      <nav
        aria-label="Social media"
        className="absolute right-0 bottom-full mb-3 w-60 rounded-lg border border-pink-200 bg-white p-2 shadow-lg"
      >
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-md p-3 text-pink-700 hover:bg-pink-50"
        >
          <Facebook aria-hidden="true" className="h-5 w-5" /> Facebook{" "}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        {SOCIAL_LINKS.instagram ? (
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md p-3 text-pink-700 hover:bg-pink-50"
          >
            <Instagram aria-hidden="true" className="h-5 w-5" /> Instagram{" "}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
      </nav>
    </details>
  );
}
