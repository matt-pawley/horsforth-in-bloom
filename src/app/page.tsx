import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Link as LinkIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Home() {
  const awards = [
    {
      provider: "Britain in Bloom - 2018",
      name: "Yorkshire Rose Town Summer Award",
      image: "/awards/2018 Summer Gold 2018_page-0001.jpg",
    },
    {
      provider: "Britain in Bloom - 2019",
      name: "Yorkshire Rose Town Summer Award",
      image: "/awards/2019 Summer Gold 2019_page-0001.jpg",
    },
    {
      provider: "Britain in Bloom - 2024",
      name: "Rose Award",
      image: "/awards/2024 YorksinBloomAward_page-0001.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to{" "}
                <span className="text-orange-500">Horsforth in Bloom</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Horsforth in Bloom is a community volunteer group that aims to
                improve the Horsforth area by creating and maintaining planting
                for the enjoyment of everyone, using sustainable principles and
                supporting wildlife.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-400 hover:bg-orange-400/90"
                >
                  <Link href="/contact">Get Involved</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <Link
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Follow us on Facebook
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/volunteers.jpg"
                alt="Horsforth in Bloom volunteers working in the community"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              About Our <span className="text-green-400">Work</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Horsforth in Bloom is a dedicated community volunteer group that
                has been transforming our local area through the power of plants
                and community spirit. We believe that beautiful, well-maintained
                green spaces not only enhance the visual appeal of Horsforth but
                also bring people together and create a sense of pride in our
                community.
              </p>
              <p className="mb-6">
                Our volunteers meet on Wednesday afternoons to plant and
                maintain various green spaces across Horsforth, including raised
                beds along busy streets, fruit trees in community orchards and
                wildflower meadows.
              </p>
              <p className="mb-6">
                We're particularly proud of our commitment to the environment,
                moving away from traditional annual bedding in favour of
                perennial flowers, herbs, shrubs and trees, chosen with care to
                thrive in local conditions. This approach not only creates
                beautiful spaces but also supports local wildlife.
              </p>
              <p>
                Our work is made possible by the dedication of our volunteers
                and the support of the local community. We welcome new
                volunteers of all ages and skill levels - whether you're an
                experienced gardener or just starting out, there's a place for
                you in our growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-400">Awards</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to have been recognised for our community work through
              various Britain in Bloom awards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={`${award.provider}-${index}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <Image
                    src={award.image}
                    alt={award.name}
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-orange-400 mb-1">
                    {award.provider}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {award.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interested in Becoming a{" "}
              <span className="text-pink-500">Volunteer?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for new volunteers to join our community!
              Whether you have years of gardening experience or are just
              starting out, we welcome people of all ages and skill levels.
              Volunteering with Horsforth in Bloom is a great way to meet new
              people, learn new skills, and make a positive impact on your local
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-400 hover:bg-green-400/90"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <Link
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  See Our Latest Activity
                </Link>
              </Button>
            </div>
            <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center">
                    <LinkIcon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      Useful Links
                    </h3>
                    <p className="text-gray-600 text-sm text-left">
                      Discover community groups, wildlife resources, and local
                      information
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact#links"
                  className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-400/90 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  View All Links
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
