import { Facebook, Instagram, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
      <section className="home-hero">
        <div className="site-container">
          <div className="home-hero-grid">
            <div>
              <h1 className="home-title">
                Welcome to{" "}
                <span className="text-forest">Horsforth in Bloom</span>
              </h1>
              <p className="home-intro">
                Horsforth in Bloom is a community volunteer group that aims to
                improve the Horsforth area by creating and maintaining planting
                for the enjoyment of everyone, using sustainable principles and
                supporting wildlife.
              </p>
              <div className="action-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get Involved</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook
                      aria-hidden="true"
                      className="h-4 w-4 mr-2 text-berry"
                    />
                    Follow us on Facebook
                  </Link>
                </Button>
                {SOCIAL_LINKS.instagram ? (
                  <Button asChild variant="outline" size="lg">
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram aria-hidden="true" className="h-4 w-4 mr-2" />
                      Follow us on Instagram
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/volunteers.jpg"
                alt="Horsforth in Bloom volunteers working in the community"
                width={600}
                height={400}
                className="home-photo content-photo"
                preload
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-space pt-0">
        <div className="site-container">
          <div className="about-layout">
            <h2 className="section-title">
              About Our <span className="text-forest">Work</span>
            </h2>
            <div className="prose-body">
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
      <section className="section-space bg-mist/60">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title mb-4">
              Our <span className="text-forest">Awards</span>
            </h2>
            <p className="text-base text-muted-ink leading-relaxed">
              We're proud to have been recognised for our community work through
              various Britain in Bloom awards
            </p>
          </div>
          <div className="award-grid">
            {awards.map((award, index) => (
              <div key={`${award.provider}-${index}`} className="award-item">
                <div className="">
                  <Image
                    src={award.image}
                    alt={award.name}
                    width={300}
                    height={400}
                    className="award-image"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-clay mb-2">
                    {award.provider}
                  </p>
                  <h3 className="text-base font-semibold text-forest">
                    {award.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-space volunteer-section">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 className="section-title text-white mb-6">
              Interested in Becoming a{" "}
              <span className="text-white">Volunteer?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              We're always looking for new volunteers to join our community!
              Whether you have years of gardening experience or are just
              starting out, we welcome people of all ages and skill levels.
              Volunteering with Horsforth in Bloom is a great way to meet new
              people, learn new skills, and make a positive impact on your local
              community.
            </p>
            <div className="action-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-forest hover:bg-mist"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                size="lg"
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
            <div className="useful-link-row">
              <div className="contents">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white text-left">
                      Useful Links
                    </h3>
                    <p className="text-white/70 text-sm text-left leading-relaxed">
                      Discover community groups, wildlife resources, and local
                      information
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact#links"
                  className="inline-flex min-h-12 shrink-0 items-center px-5 py-3 rounded-lg border border-white/40 text-white text-sm font-semibold hover:bg-white/10"
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
