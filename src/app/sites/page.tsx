import Image from "next/image";
import { getSitesData } from "@/lib/sites-data";
import { SitesGallery } from "@/components/SitesGallery";

export default async function Sites() {
  // This runs at build time, generating static pages
  const sites = await getSitesData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-500">Sites</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Explore the beautiful locations throughout Horsforth where our
                volunteers work to create welcoming and joyful spaces for
                everyone to enjoy.
              </p>
              <p className="text-lg text-gray-600">
                Use the map to see all our sites at a glance, then explore each
                location in detail below.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/site.jpg"
                alt="Map of Horsforth in Bloom sites with key"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-green-200"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <SitesGallery sites={sites} />
    </div>
  );
}
