"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Search } from "lucide-react";

export default function Sites() {
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sites = [
    {
      name: "Burial Ground",
      thumbnail: "/sites/Burial Ground/Burial Ground 01.jpg",
      images: [
        "/sites/Burial Ground/Burial Ground 01-1.jpg",
        "/sites/Burial Ground/Burial Ground 01.jpg",
        "/sites/Burial Ground/burial ground 22-03.jpg",
        "/sites/Burial Ground/burial ground 22-07.jpg",
        "/sites/Burial Ground/burial ground19-07.jpg",
        "/sites/Burial Ground/BurialGroundMar18.jpg",
        "/sites/Burial Ground/OldBurial2019-03.jpg"
      ]
    },
    {
      name: "Crabtree Land",
      thumbnail: "/sites/Crabtree Land/CrabtreeLand19-06.jpg",
      images: [
        "/sites/Crabtree Land/CrabtreeLand19-06.jpg",
        "/sites/Crabtree Land/CrabtreeMar18.jpg",
        "/sites/Crabtree Land/IMG_9017.JPG",
        "/sites/Crabtree Land/IMG_9027.JPG"
      ]
    },
    {
      name: "Fink Hill Bed",
      thumbnail: "/sites/Fink Hill Bed/thumbnail_FLZ_3482 copy.jpg",
      images: [
        "/sites/Fink Hill Bed/2014-06-07 07.24.41.jpg",
        "/sites/Fink Hill Bed/Fink Hill Bed 03.jpg",
        "/sites/Fink Hill Bed/finkhill19-07.jpg",
        "/sites/Fink Hill Bed/FLZ_3473 copy.jpg",
        "/sites/Fink Hill Bed/FLZ_3476 copy.jpg",
        "/sites/Fink Hill Bed/FLZ_3490 copy.jpg",
        "/sites/Fink Hill Bed/FLZ_3494 copy.jpg",
        "/sites/Fink Hill Bed/IMG_1018.JPG",
        "/sites/Fink Hill Bed/IMG_1022.JPG",
        "/sites/Fink Hill Bed/Rose.jpg",
        "/sites/Fink Hill Bed/thumbnail_FLZ_3482 copy.jpg"
      ]
    },
    {
      name: "Hall Park",
      thumbnail: "/sites/Hall Park/2010-07-15 10.29.30.jpg",
      images: [
        "/sites/Hall Park/2010-07-15 10.29.30.jpg",
        "/sites/Hall Park/2014-06-20 18.32.11.jpg",
        "/sites/Hall Park/2014-06-20 18.33.37.jpg",
        "/sites/Hall Park/Hornbeam 22-01.jpg"
      ]
    },
    {
      name: "Herb Garden",
      thumbnail: "/sites/Herb Garden/Herb Garden.jpg",
      images: [
        "/sites/Herb Garden/Herb Garden.jpg",
        "/sites/Herb Garden/IMG_2912.jpg"
      ]
    },
    {
      name: "Library",
      thumbnail: "/sites/Library/Library 02.jpg",
      images: [
        "/sites/Library/IMG_0872.JPG",
        "/sites/Library/IMG_0874.JPG",
        "/sites/Library/Library 02.jpg"
      ]
    },
    {
      name: "Long Row",
      thumbnail: "/sites/Long Row/Long Row by Old Ball Roundabout.jpg",
      images: [
        "/sites/Long Row/Long Row by Old Ball Roundabout.jpg",
        "/sites/Long Row/Old Ball.jpg",
        "/sites/Long Row/oldball21-03-31.jpg"
      ]
    },
    {
      name: "New Road Side",
      thumbnail: "/sites/New Road Side/IMG_1111.JPG",
      images: [
        "/sites/New Road Side/IMG_1111.JPG",
        "/sites/New Road Side/LAH001.jpg",
        "/sites/New Road Side/NRS 31-5-23.jpg"
      ]
    },
    {
      name: "Pollination Corner",
      thumbnail: "/sites/Pollination Corner/pollination corner.jpg",
      images: [
        "/sites/Pollination Corner/Brickspollinationcorner.jpg",
        "/sites/Pollination Corner/IMG_0875.JPG",
        "/sites/Pollination Corner/pollination corner.jpg",
        "/sites/Pollination Corner/pollination corner2.jpg",
        "/sites/Pollination Corner/PollinationCorner18-08.jpg"
      ]
    },
    {
      name: "Regent Triangle",
      thumbnail: "/sites/Regent Triangle/IMG_2980.jpg",
      images: [
        "/sites/Regent Triangle/IMG_2980.jpg",
        "/sites/Regent Triangle/IMG_3411.jpg",
        "/sites/Regent Triangle/IMG_4014.JPG"
      ]
    },
    {
      name: "Station",
      thumbnail: "/sites/Station/HorsforthStation1.jpg",
      images: [
        "/sites/Station/HorsforthStation1.jpg",
        "/sites/Station/IMG_0878.JPG",
        "/sites/Station/IMG_0882.JPG",
        "/sites/Station/IMG_0884.JPG",
        "/sites/Station/Railway Station.jpg"
      ]
    }
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
      const site = sites.find(s => s.name === selectedSite);
      if (site) {
        setCurrentImageIndex((prev) => (prev + 1) % site.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedSite) {
      const site = sites.find(s => s.name === selectedSite);
      if (site) {
        setCurrentImageIndex((prev) => (prev - 1 + site.images.length) % site.images.length);
      }
    }
  };

  const selectedSiteData = selectedSite ? sites.find(s => s.name === selectedSite) : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-400">Sites</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore the beautiful locations throughout Horsforth where our volunteers work to create 
              welcoming and joyful spaces for everyone to enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sites.map((site) => (
              <button
                key={site.name}
                className="group cursor-pointer w-full text-left"
                onClick={() => openGallery(site.name)}
                type="button"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-orange-400/20 hover:border-orange-400/40">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={site.thumbnail}
                      alt={`${site.name} - Horsforth in Bloom site`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <Search className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-orange-400 transition-colors duration-300">
                      {site.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mt-1">
                      {site.images.length} photo{site.images.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedSiteData && (
        <Dialog open={!!selectedSite} onOpenChange={closeGallery}>
          <DialogContent className="max-w-6xl w-full h-[95vh] p-0">
            <DialogTitle className="sr-only">
              Image Gallery for {selectedSiteData.name}
            </DialogTitle>
            <div className="relative h-full flex flex-col">
              {/* Header with Site Name */}
              <div className="flex items-center justify-center p-4 bg-white border-b">
                <h2 className="text-xl font-semibold text-gray-900">{selectedSiteData.name}</h2>
              </div>

              {/* Main Image Container */}
              <div className="flex-1 relative bg-gray-100 flex items-center justify-center">
                {/* Navigation Arrows */}
                {selectedSiteData.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-4 z-10 bg-white/90 text-gray-700 rounded-full p-3 hover:bg-white hover:shadow-lg transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-4 z-10 bg-white/90 text-gray-700 rounded-full p-3 hover:bg-white hover:shadow-lg transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Main Image */}
                <div className="relative w-full h-full max-w-4xl max-h-[70vh]">
                  <Image
                    src={selectedSiteData.images[currentImageIndex]}
                    alt={`${selectedSiteData.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Footer with Image Counter and Thumbnails */}
              <div className="bg-white border-t p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-gray-600">
                    Image {currentImageIndex + 1} of {selectedSiteData.images.length}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                {selectedSiteData.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {selectedSiteData.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? 'border-orange-400 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
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
