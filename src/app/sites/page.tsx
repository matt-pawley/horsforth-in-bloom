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
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-700">Sites</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Explore the beautiful locations throughout Horsforth where our
              volunteers work to create welcoming and joyful spaces for everyone
              to enjoy, with more photos in the gallery.
            </p>
            <p className="text-lg text-gray-600">
              Use the map to see our sites at a glance, then explore each
              location in detail below.
            </p>
          </div>
          <Image
            src="/site.jpg"
            alt="Map of Horsforth in Bloom sites with key"
            width={840}
            height={1114}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="w-full h-auto rounded-lg border border-green-200"
            priority
          />
        </div>
      </section>
      <section
        className="py-16 bg-white"
        aria-label="Sites in alphabetical order"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sites.map((site) => (
            <article
              key={site.slug}
              id={site.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-200"
            >
              <div
                className={
                  site.thumbnail ? "grid grid-cols-1 lg:grid-cols-2" : ""
                }
              >
                {site.thumbnail ? (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={site.thumbnail}
                      alt={`${site.name} in Horsforth`}
                      fill
                      sizes="(max-width: 1023px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {site.name}
                  </h2>
                  {site.subheading ? (
                    <p className="text-lg text-orange-700 font-medium mb-4">
                      {site.subheading}
                    </p>
                  ) : null}
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {site.description}
                  </p>
                  {site.images.length > 0 ? (
                    <Link
                      href={`/gallery#${site.slug}`}
                      className="text-orange-700 hover:underline font-medium self-start"
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
