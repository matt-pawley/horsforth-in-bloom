import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = {
  title: "Contact Us - Horsforth in Bloom",
  description:
    "Get in touch with Horsforth in Bloom. Contact us via email or Facebook to learn more about volunteering opportunities.",
  keywords: "contact, volunteer, Horsforth in Bloom, email, Facebook",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-3xl">
            <h1 className="page-title">
              Get in <span className="text-forest">Touch</span>
            </h1>
            <p className="page-intro">
              We'd love to hear from you! Whether you're interested in
              volunteering, have questions about our work, or want to get
              involved in our community gardening projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-space">
        <div className="site-container">
          <div className="contact-layout">
            {/* Contact Details */}
            <div>
              <h2 className="section-title text-[1.75rem] mb-7">
                Contact <span className="text-forest">Information</span>
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-mist rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-forest" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-forest mb-2">
                      Email Us
                    </h3>
                    <p className="text-muted-ink leading-relaxed mb-3">
                      Send us an email and we'll get back to you as soon as
                      possible.
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-forest hover:text-forest/80 transition-colors font-medium break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-mist rounded-xl flex items-center justify-center">
                      <Facebook className="h-6 w-6 text-forest" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-forest mb-2">
                      Follow Us on Facebook
                    </h3>
                    <p className="text-muted-ink leading-relaxed mb-3">
                      See our latest activities, photos, and updates from the
                      community.
                    </p>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:text-forest/80 transition-colors font-medium"
                    >
                      Join our Facebook group
                    </a>
                  </div>
                </div>
                {SOCIAL_LINKS.instagram ? (
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 shrink-0 bg-pink-50 rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-forest" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-forest mb-2">
                        Follow Us on Instagram
                      </h3>
                      <p className="text-muted-ink leading-relaxed mb-3">
                        Follow us on Instagram. Stay connected with updates,
                        inspiration and news.
                      </p>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest hover:underline font-medium"
                      >
                        Visit our Instagram
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Contact Form Placeholder & Additional Info */}
            <div>
              <h2 className="section-title text-[1.75rem] mb-7">
                Get Involved
              </h2>

              <div className="contact-card mb-8">
                <h3 className="text-xl font-semibold text-forest mb-4">
                  Ready to Volunteer?
                </h3>
                <p className="prose-body mb-6">
                  We welcome volunteers of all ages and skill levels. Whether
                  you're an experienced gardener or just starting out, there's a
                  place for you in our community. We provide all the guidance
                  you need, just bring along your favourite hand tools and
                  gloves. We meet each Wednesday afternoon from 1.30pm to
                  approx. 3.00pm throughout the year, weather dependent.
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <a
                      href={`mailto:${CONTACT_INFO.email}?subject=Volunteer Interest`}
                    >
                      Send us an email
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Message us on Facebook
                    </a>
                  </Button>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-mist rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-forest" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-forest mb-2">
                      Our Location
                    </h3>
                    <p className="text-muted-ink leading-relaxed">
                      We meet at different locations across Horsforth, please
                      use the contact details to find out where we will be
                      working next.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="section-space bg-mist/50" id="links">
        <div className="site-container">
          <div className="mb-8">
            <h2 className="section-title mb-4">
              Useful <span className="text-forest">Links</span>
            </h2>
            <p className="max-w-2xl text-base text-muted-ink leading-relaxed">
              Explore these helpful resources for community groups, wildlife
              gardening, and local information
            </p>
          </div>

          <div className="">
            <div className="resource-grid">
              {/* Horsforth Town Links */}
              <div className="resource-item">
                <h3 className="text-lg font-semibold text-forest mb-3">
                  Horsforth Town Links
                </h3>
                <p className="text-muted-ink leading-relaxed text-sm mb-4 flex-grow">
                  Comprehensive directory of local community groups, events, and
                  activities
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="link"
                  className="w-fit justify-start px-0 mt-auto"
                >
                  <a
                    href="https://horsforth.town/links/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Horsforth Town Links
                  </a>
                </Button>
              </div>

              {/* Yorkshire Wildlife Trust */}
              <div className="resource-item">
                <h3 className="text-lg font-semibold text-forest mb-3">
                  Wildlife Gardening Hub
                </h3>
                <p className="text-muted-ink leading-relaxed text-sm mb-4 flex-grow">
                  Yorkshire Wildlife Trust's guide to creating wildlife-friendly
                  gardens
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="link"
                  className="w-fit justify-start px-0 mt-auto"
                >
                  <a
                    href="https://www.ywt.org.uk/wildlife-gardening-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Wildlife Gardening Hub
                  </a>
                </Button>
              </div>

              {/* RHS Wildlife */}
              <div className="resource-item">
                <h3 className="text-lg font-semibold text-forest mb-3">
                  RHS Wildlife Gardening
                </h3>
                <p className="text-muted-ink leading-relaxed text-sm mb-4 flex-grow">
                  Royal Horticultural Society's wildlife gardening resources and
                  advice
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="link"
                  className="w-fit justify-start px-0 mt-auto"
                >
                  <a
                    href="https://www.rhs.org.uk/wildlife"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit RHS Wildlife
                  </a>
                </Button>
              </div>

              {/* Horsforth Climate Action */}
              <div className="resource-item">
                <h3 className="text-lg font-semibold text-forest mb-3">
                  Horsforth Climate Action
                </h3>
                <p className="text-muted-ink leading-relaxed text-sm mb-4 flex-grow">
                  Local climate action group working towards environmental
                  sustainability
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="link"
                  className="w-fit justify-start px-0 mt-auto"
                >
                  <a
                    href="https://horsforthclimateaction.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Climate Action
                  </a>
                </Button>
              </div>

              {/* Yorkshire in Bloom */}
              <div className="resource-item">
                <h3 className="text-lg font-semibold text-forest mb-3">
                  Yorkshire in Bloom
                </h3>
                <p className="text-muted-ink leading-relaxed text-sm mb-4 flex-grow">
                  Regional Britain in Bloom competition and community gardening
                  support
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="link"
                  className="w-fit justify-start px-0 mt-auto"
                >
                  <a
                    href="https://www.yorkshireinbloom.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Yorkshire in Bloom
                  </a>
                </Button>
              </div>

              {/* Leeds Parks and Green Spaces Forum */}
              <div className="resource-item">
                <h3 className="text-lg font-semibold text-forest mb-3">
                  Leeds Parks and Green Spaces Forum
                </h3>
                <p className="text-muted-ink leading-relaxed text-sm mb-4 flex-grow">
                  The Leeds Parks and Green Spaces Forum is a voluntary
                  organisation made up of individuals, groups and organisations
                  interested in enhancing the green spaces of Leeds.
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="link"
                  className="w-fit justify-start px-0 mt-auto"
                >
                  <a
                    href="https://leedsparksforum.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Parks Forum
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
