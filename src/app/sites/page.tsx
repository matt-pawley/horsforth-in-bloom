"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function Sites() {
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sites = [
    {
      name: "Old Burial Ground",
      subheading: "Church Lane",
      description:
        "The site is owned by St. Margaret's church. We took on the management of the Old Burial Ground several years ago and have improved the wildflowers by sowing the annual flower yellow rattle. This suppresses the growth of vigorous grasses allowing wildflowers to grow, including the common spotted orchid which flowers reliably. The paths are regularly mown throughout the summer.",
      thumbnail: "/sites/Burial Ground/Burial Ground 01.jpg",
      images: [
        "/sites/Burial Ground/Burial Ground 01-1.jpg",
        "/sites/Burial Ground/burial ground 22-03.jpg",
        "/sites/Burial Ground/burial ground 22-07.jpg",
        "/sites/Burial Ground/burial ground19-07.jpg",
        "/sites/Burial Ground/BurialGroundMar18.jpg",
        "/sites/Burial Ground/OldBurial2019-03.jpg",
      ],
    },
    {
      name: "Crabtree Land",
      subheading: "Town street, opposite Morrisons",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      thumbnail: "/sites/Crabtree Land/CrabtreeLand19-06.jpg",
      images: ["/sites/Crabtree Land/CrabtreeLand19-06.jpg"],
    },
    {
      name: "Fink Hill and Jubilee Clock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      thumbnail: "/sites/Fink Hill Bed/thumbnail_FLZ_3482 copy.jpg",
      images: [
        "/sites/Fink Hill Bed/2014-06-07 07.24.41.jpg",
        "/sites/Fink Hill Bed/FLZ_3473 copy.jpg",
        "/sites/Fink Hill Bed/FLZ_3476 copy.jpg",
        "/sites/Fink Hill Bed/FLZ_3490 copy.jpg",
        "/sites/Fink Hill Bed/FLZ_3494 copy.jpg",
        "/sites/Fink Hill Bed/IMG_1018.JPG",
        "/sites/Fink Hill Bed/IMG_1022.JPG",
        "/sites/Fink Hill Bed/Rose.jpg",
        "/sites/Fink Hill Bed/thumbnail_FLZ_3482 copy.jpg",
      ],
    },
    {
      name: "Hall Park",
      description:
        "During Covid Councillor Jonathan Taylor installed a 2.4m long natter bench which enabled social distancing. From April 2023 Horsforth in Bloom created and now looks after the planting around the Natter Bench, including the planting of a Tulip tree bought by Horsforth in Bloom as part of the Queen's Green Canopy.",
      thumbnail: "/sites/Hall Park/2010-07-15 10.29.30.jpg",
      images: [
        "/sites/Hall Park/2010-07-15 10.29.30.jpg",
        "/sites/Hall Park/2014-06-20 18.32.11.jpg",
        "/sites/Hall Park/2014-06-20 18.33.37.jpg",
        "/sites/Hall Park/Hornbeam 22-01.jpg",
      ],
    },
    {
      name: "Herb Garden",
      subheading: "Junction of King Edward Avenue and Broadgate Lane",
      description: "Herbs are grown here for all to pick and enjoy",
      thumbnail: "/sites/Herb Garden/Herb Garden.jpg",
      images: ["/sites/Herb Garden/Herb Garden.jpg"],
    },
    {
      name: "Jubilee Gardens",
      subheading: "Junction of Town Street and Church Lane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      thumbnail: "/sites/Library/Library 02.jpg",
      images: [
        "/sites/Library/IMG_0872.JPG",
        "/sites/Library/IMG_0874.JPG",
        "/sites/Library/Library 02.jpg",
      ],
    },
    {
      name: "Old Ball Bed",
      description:
        "Planting was inspired by the history of Horsforth to reflect the original ford for Horsforth. The yew hedges are horseshoe shaped and the planting is white and blue to reflect the importance of water on the boundaries of Horsforth.",
      thumbnail: "/sites/Long Row/Long Row by Old Ball Roundabout.jpg",
      images: [
        "/sites/Long Row/Long Row by Old Ball Roundabout.jpg",
        "/sites/Long Row/Old Ball.jpg",
        "/sites/Long Row/oldball21-03-31.jpg",
      ],
    },
    {
      name: "New Road Side",
      description:
        "New Road Side includes many raised beds constructed from stone and timber",
      thumbnail: "/sites/New Road Side/IMG_1111.JPG",
      images: [
        "/sites/New Road Side/IMG_1111.JPG",
        "/sites/New Road Side/LAH001.jpg",
        "/sites/New Road Side/NRS 31-5-23.jpg",
      ],
    },
    {
      name: "Pollination Corner",
      subheading: "Corner of Church Lane and Church Road ",
      description:
        "The brick surrounds were originally painted in 2019 by pupils of St. Margaret’s Primary School and Horsforth in Bloom volunteers.",
      thumbnail: "/sites/Pollination Corner/pollination corner.jpg",
      images: [
        "/sites/Pollination Corner/Brickspollinationcorner.jpg",
        "/sites/Pollination Corner/IMG_0875.JPG",
        "/sites/Pollination Corner/pollination corner.jpg",
        "/sites/Pollination Corner/pollination corner2.jpg",
        "/sites/Pollination Corner/PollinationCorner18-08.jpg",
      ],
    },
    {
      name: "Station Road",
      description:
        "At the suggestion of a Horsforth in Bloom volunteer we adopted the bed alongside the walkway down to the train station and over the years have continued to adapt the planting.",
      thumbnail: "/sites/Station/HorsforthStation1.jpg",
      images: [
        "/sites/Station/HorsforthStation1.jpg",
        "/sites/Station/Railway Station.jpg",
      ],
    },
    {
      name: "Community Orchards",
      description:
        "We have created and look after several community orchards across Horsforth.",
      thumbnail: "https://placehold.co/900x500.jpg",
      images: ["https://placehold.co/900x500.jpg"],
    },
    {
      name: "Bulb Planting",
      subheading: "Junction of Church Road and Church Lane",
      description:
        "Horsforth in Bloom plant bulbs in various locations to provide a splash of Spring colour. The purple crocuses on the triangle at the junction of Church Road and Church Lane were donated by Aireborough Rotary Club in recognition of their campaign to eradicate polio (a purple dot on a child’s finger indicates they've received a polio vaccine).",
      thumbnail: "https://placehold.co/900x500.jpg",
      images: ["https://placehold.co/900x500.jpg"],
    },
    {
      name: "Other",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      thumbnail: "/sites/Regent Triangle/IMG_2980.jpg",
      images: [
        "/sites/Regent Triangle/IMG_2980.jpg",
        "/sites/Regent Triangle/IMG_3411.jpg",
        "/sites/Regent Triangle/IMG_4014.JPG",
      ],
    },
  ];

  const openGallery = (siteName: string, imageIndex: number = 0) => {
    setSelectedSite(siteName);
    setCurrentImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedSite(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedSite) {
      const site = sites.find((s) => s.name === selectedSite);
      if (site) {
        setCurrentImageIndex((prev) => (prev + 1) % site.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedSite) {
      const site = sites.find((s) => s.name === selectedSite);
      if (site) {
        setCurrentImageIndex(
          (prev) => (prev - 1 + site.images.length) % site.images.length,
        );
      }
    }
  };

  const selectedSiteData = selectedSite
    ? sites.find((s) => s.name === selectedSite)
    : null;

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

      {/* Sites Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sites.map((site) => (
              <div
                key={site.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-orange-400/20 hover:border-orange-400/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
                    <Image
                      src={site.thumbnail}
                      alt={`${site.name} - Horsforth in Bloom site`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => openGallery(site.name)}
                      className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center group"
                      type="button"
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <Search className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Text Section */}
                  <div className="p-6 flex flex-col justify-start">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {site.name}
                      </h3>
                      {site.subheading && (
                        <p className="text-lg text-orange-400 font-medium mb-4">
                          {site.subheading}
                        </p>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {site.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-sm text-gray-600">
                        {site.images.length} photo
                        {site.images.length !== 1 ? "s" : ""}
                      </p>
                      <button
                        onClick={() => openGallery(site.name)}
                        className="text-orange-400 hover:text-orange-500 font-medium transition-colors duration-200"
                        type="button"
                      >
                        View Gallery →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedSiteData && (
        <Dialog open={!!selectedSite} onOpenChange={closeGallery}>
          <DialogContent className="!max-w-none !w-[95vw] !h-[95vh] sm:!h-[90vh] !min-h-[400px] !p-0 !m-2 sm:!m-4 !left-[2.5vw] !top-[2.5vh] sm:!left-[50%] sm:!top-[50%] !translate-x-0 sm:!translate-x-[-50%] !translate-y-0 sm:!translate-y-[-50%]">
            <DialogTitle className="sr-only">
              Image Gallery for {selectedSiteData.name}
            </DialogTitle>
            <div className="relative h-full flex flex-col overflow-hidden">
              {/* Header with Site Name */}
              <div className="flex items-center justify-center p-3 sm:p-4 bg-white border-b flex-shrink-0">
                <div className="text-center px-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {selectedSiteData.name}
                  </h2>
                  {selectedSiteData.subheading && (
                    <p className="text-sm text-orange-400 font-medium mt-1">
                      {selectedSiteData.subheading}
                    </p>
                  )}
                </div>
              </div>

              {/* Main Image Container */}
              <div className="flex-1 relative bg-gray-100 flex items-center justify-center min-h-0 overflow-hidden">
                {/* Navigation Arrows */}
                {selectedSiteData.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 z-10 bg-white/90 text-gray-700 rounded-full p-2 sm:p-3 hover:bg-white hover:shadow-lg transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 z-10 bg-white/90 text-gray-700 rounded-full p-2 sm:p-3 hover:bg-white hover:shadow-lg transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                    </button>
                  </>
                )}

                {/* Main Image */}
                <div className="relative w-full h-full max-w-5xl max-h-full p-2 sm:p-4 flex items-center justify-center">
                  <Image
                    src={selectedSiteData.images[currentImageIndex]}
                    alt={`${selectedSiteData.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              </div>

              {/* Footer with Image Counter and Thumbnails */}
              <div className="bg-white border-t p-3 sm:p-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Image {currentImageIndex + 1} of{" "}
                    {selectedSiteData.images.length}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                {selectedSiteData.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto pb-1">
                    {selectedSiteData.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-orange-400 shadow-lg"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        aria-label={`View image ${index + 1}`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
