import { Facebook, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialLinks() {
  return (
    <details className="relative w-full sm:w-auto shrink-0 z-40 group">
      <summary className="w-fit cursor-pointer list-none rounded-lg border border-white/30 px-4 py-3 text-white/85 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white">
        <span className="flex items-center gap-2">
          <Facebook aria-hidden="true" className="h-5 w-5" /> Social media
        </span>
      </summary>
      <nav
        aria-label="Social media"
        className="absolute left-0 sm:left-auto sm:right-0 bottom-full mb-3 w-60 rounded-xl border border-line bg-white p-2 shadow-lg"
      >
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-md p-3 text-forest hover:bg-mist hover:text-forest focus-visible:outline-forest"
        >
          <Facebook aria-hidden="true" className="h-5 w-5" /> Facebook{" "}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        {SOCIAL_LINKS.instagram ? (
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md p-3 text-forest hover:bg-mist hover:text-forest focus-visible:outline-forest"
          >
            <Instagram aria-hidden="true" className="h-5 w-5" /> Instagram{" "}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
      </nav>
    </details>
  );
}
