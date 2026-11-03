import { SitesGallery } from "@/components/SitesGallery";
import { getSitesData } from "@/lib/sites-data";

export const metadata = {
  title: "Gallery - Horsforth in Bloom",
  description:
    "Photos of the gardens, community orchards, planters and projects cared for by Horsforth in Bloom.",
};

export default function Gallery() {
  const sites = getSitesData().filter((site) => site.images.length > 0);
  return (
    <div className="min-h-screen">
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-700">Gallery</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Explore our planting and community projects through the seasons.
            Choose a photo to take a closer look.
          </p>
          <nav
            aria-label="Jump to a site's photos"
            className="flex flex-wrap gap-2 mt-8"
          >
            {sites.map((site) => (
              <a
                key={site.slug}
                href={`#${site.slug}`}
                className="rounded-full bg-white border border-orange-200 px-4 py-2 text-sm text-gray-700 hover:border-orange-500 hover:text-orange-800"
              >
                {site.name}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <SitesGallery sites={sites} />
    </div>
  );
}
