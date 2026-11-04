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
      <section className="page-hero pb-5">
        <div className="site-container">
          <h1 className="page-title">
            Our <span className="text-forest">Gallery</span>
          </h1>
          <p className="page-intro">
            Explore our planting and community projects through the seasons.
            Choose a photo to take a closer look.
          </p>
          <nav aria-label="Jump to a site's photos" className="gallery-nav">
            {sites.map((site) => (
              <a key={site.slug} href={`#${site.slug}`} className="">
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
