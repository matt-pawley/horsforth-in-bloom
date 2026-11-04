import { Expand } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSitesData } from "@/lib/sites-data";

export const metadata = {
  title: "Our Sites - Horsforth in Bloom",
  description:
    "Explore the gardens, planters, orchards and green spaces cared for by Horsforth in Bloom volunteers.",
};

export default function Sites() {
  const sites = getSitesData();
  return (
    <div className="min-h-screen">
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-3xl mb-10">
            <h1 className="page-title">
              Our <span className="text-forest">Sites</span>
            </h1>
            <p className="page-intro mb-4">
              Explore the beautiful locations throughout Horsforth where our
              volunteers work to create welcoming and joyful spaces for everyone
              to enjoy, with more photos in the gallery.
            </p>
            <p className="text-base text-muted-ink leading-relaxed">
              Use the map to see our sites at a glance, then explore each
              location in detail below.
            </p>
          </div>
          <div className="map-viewer">
            <a
              href="/site.jpg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Map of Horsforth in Bloom sites with key"
            >
              <Image
                src="/site.jpg"
                alt="Map of Horsforth in Bloom sites with key"
                width={840}
                height={1114}
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="w-full"
                preload
              />
              <span className="map-open" aria-hidden="true">
                <Expand className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section
        className="section-space"
        aria-label="Sites in alphabetical order"
      >
        <div className="site-container site-list">
          {sites.map((site) => (
            <article key={site.slug} id={site.slug} className="site-article">
              <div className={site.thumbnail ? "site-layout" : ""}>
                {site.thumbnail ? (
                  <div className="site-photo">
                    <Image
                      src={site.thumbnail}
                      alt={`${site.name} in Horsforth`}
                      fill
                      sizes="(max-width: 1023px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-forest mb-3">
                    {site.name}
                  </h2>
                  {site.subheading ? (
                    <p className="text-sm text-clay font-medium mb-4">
                      {site.subheading}
                    </p>
                  ) : null}
                  <p className="prose-body mb-5">{site.description}</p>
                  {site.images.length > 0 ? (
                    <Link
                      href={`/gallery#${site.slug}`}
                      className="text-forest hover:underline underline-offset-4 text-sm font-semibold self-start"
                    >
                      More photos of {site.name} in the gallery{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
