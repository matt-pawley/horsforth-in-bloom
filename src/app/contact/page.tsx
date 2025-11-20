import { Mail, Phone, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";

export const metadata = {
  title: "Contact Us - Horsforth in Bloom",
  description:
    "Get in touch with Horsforth in Bloom. Contact us via email, phone, or Facebook to learn more about volunteering opportunities.",
  keywords: "contact, volunteer, Horsforth in Bloom, email, phone, Facebook",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-green-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you're interested in
              volunteering, have questions about our work, or want to get
              involved in our community gardening projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact <span className="text-green-400">Information</span>
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Send us an email and we'll get back to you as soon as
                      possible.
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-orange-400 hover:text-orange-400/80 transition-colors font-medium"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Speak directly with Peter Mallott, our group coordinator.
                    </p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-green-400 hover:text-green-400/80 transition-colors font-medium"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                      <Facebook className="h-6 w-6 text-pink-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Follow Us on Facebook
                    </h3>
                    <p className="text-gray-600 mb-3">
                      See our latest activities, photos, and updates from the
                      community.
                    </p>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-500/80 transition-colors font-medium"
                    >
                      Join our Facebook group
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get Involved
              </h2>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to Volunteer?
                </h3>
                <p className="text-gray-700 mb-6">
                  We welcome volunteers of all ages and skill levels. Whether
                  you're an experienced gardener or just starting out, there's a
                  place for you in our community. We provide all the guidance
                  you need, just bring along your favourite hand tools and
                  gloves.
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-orange-400 hover:bg-orange-400/90"
                  >
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
                    className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
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
                    <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      We meet at different locations across Horsforth, please
                      use the contact details to find out where we will be
                      working next. We meet each Wednesday afternoon from 1.30pm
                      to approx. 3.00pm throughout the year, weather dependent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section
        className="py-16 bg-gradient-to-br from-pink-500/5 to-green-400/5"
        id="links"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Useful <span className="text-green-400">Links</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore these helpful resources for community groups, wildlife
              gardening, and local information
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Horsforth Town Links */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Horsforth Town Links
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Comprehensive directory of local community groups, events, and
                  activities
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-orange-400 hover:bg-orange-400/90 mt-auto"
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
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Wildlife Gardening Hub
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Yorkshire Wildlife Trust's guide to creating wildlife-friendly
                  gardens
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-green-400 hover:bg-green-400/90 mt-auto"
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
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  RHS Wildlife Gardening
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Royal Horticultural Society's wildlife gardening resources and
                  advice
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-pink-500 hover:bg-pink-500/90 mt-auto"
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
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Horsforth Climate Action
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Local climate action group working towards environmental
                  sustainability
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-orange-400 hover:bg-orange-400/90 mt-auto"
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
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Yorkshire in Bloom
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Regional Britain in Bloom competition and community gardening
                  support
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-green-400 hover:bg-green-400/90 mt-auto"
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

              {/* Leeds Council Parks Strategy */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Leeds Parks & Green Spaces Strategy
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Leeds City Council's strategy for parks and green spaces
                  development
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-pink-500 hover:bg-pink-500/90 mt-auto"
                >
                  <a
                    href="https://www.leeds.gov.uk/plans-and-strategies/parks-and-green-spaces-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Parks Strategy
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
