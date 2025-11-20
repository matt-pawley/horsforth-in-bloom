"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { Site } from "@/lib/sites-data";

interface SitesGalleryProps {
  sites: Site[];
}

export function SitesGallery({ sites }: SitesGalleryProps) {
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <>
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
    </>
  );
}

