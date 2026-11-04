"use client";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Site } from "@/lib/sites-data";

export function SitesGallery({ sites }: { sites: Site[] }) {
  const selectedTrigger = useRef<HTMLButtonElement | null>(null);
  const [selection, setSelection] = useState<{
    slug: string;
    index: number;
  } | null>(null);
  const selectedSite = sites.find((site) => site.slug === selection?.slug);
  const move = (offset: number) => {
    if (!selectedSite) return;
    setSelection((current) =>
      current
        ? {
            ...current,
            index:
              (current.index + offset + selectedSite.images.length) %
              selectedSite.images.length,
          }
        : null,
    );
  };

  return (
    <>
      <div className="site-container section-space space-y-12 sm:space-y-16">
        {sites.map((site) => (
          <section
            key={site.slug}
            id={site.slug}
            aria-labelledby={`${site.slug}-heading`}
          >
            <h2
              id={`${site.slug}-heading`}
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-forest mb-6"
            >
              {site.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {site.images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Enlarge photo ${index + 1} of ${site.name}`}
                  onClick={(event) => {
                    selectedTrigger.current = event.currentTarget;
                    setSelection({ slug: site.slug, index });
                  }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-black/10 focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-4"
                >
                  <Image
                    src={src}
                    alt={`${site.name}, photo ${index + 1}`}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 300px"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-2 bottom-2 rounded-full bg-white/90 p-2 text-forest"
                  >
                    <Expand className="h-4 w-4" />
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Dialog
        open={selection !== null}
        onOpenChange={(open) => {
          if (!open) setSelection(null);
        }}
      >
        {selectedSite && selection ? (
          <DialogContent
            className="!max-w-6xl !w-[calc(100vw-2rem)] !h-[85dvh] !p-4 sm:!p-6 !gap-3 bg-paper flex flex-col overscroll-contain rounded-2xl"
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              selectedTrigger.current?.focus();
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
              }
            }}
          >
            <DialogTitle className="text-lg font-semibold text-forest pr-10">
              {selectedSite.name}
            </DialogTitle>
            <DialogDescription className="text-muted-ink">
              Use the arrow buttons or left and right arrow keys to browse.
              Press Escape to close.
            </DialogDescription>
            <div className="relative flex-1 min-h-0 bg-mist/50 rounded-lg">
              <Image
                src={selectedSite.images[selection.index]}
                alt={`${selectedSite.name}, photo ${selection.index + 1}`}
                fill
                sizes="(max-width: 1200px) 95vw, 1100px"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous photo"
                className="rounded-full p-3 border border-line bg-white text-forest hover:bg-mist"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <p
                aria-live="polite"
                className="text-sm text-gray-700 tabular-nums"
              >
                Photo {selection.index + 1} of {selectedSite.images.length}
              </p>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next photo"
                className="rounded-full p-3 border border-line bg-white text-forest hover:bg-mist"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
