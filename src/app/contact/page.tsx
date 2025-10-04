import { Mail, Phone, Facebook, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact Us - Horsforth in Bloom",
  description: "Get in touch with Horsforth in Bloom. Contact us via email, phone, or Facebook to learn more about volunteering opportunities.",
  keywords: "contact, volunteer, Horsforth in Bloom, email, phone, Facebook",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you're interested in volunteering, have questions 
              about our work, or want to get involved in our community gardening projects.
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-3">
                      Send us an email and we'll get back to you as soon as possible.
                    </p>
                    <a
                      href="mailto:horsforthinbloom@gmail.com"
                      className="text-orange-400 hover:text-orange-400/80 transition-colors font-medium"
                    >
                      horsforthinbloom@gmail.com
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-3">
                      Speak directly with Peter Mallot, our group coordinator.
                    </p>
                    <a
                      href="tel:0777093594"
                      className="text-green-400 hover:text-green-400/80 transition-colors font-medium"
                    >
                      07770 93594
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us on Facebook</h3>
                    <p className="text-gray-600 mb-3">
                      See our latest activities, photos, and updates from the community.
                    </p>
                    <a
                      href="https://www.facebook.com/HorsforthInBloom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-500/80 transition-colors font-medium"
                    >
                      @HorsforthInBloom
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Involved</h2>
              
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Volunteer?</h3>
                <p className="text-gray-700 mb-6">
                  We welcome volunteers of all ages and skill levels. Whether you're an experienced 
                  gardener or just starting out, there's a place for you in our community. We provide 
                  all the tools and guidance you need to get started.
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-orange-400 hover:bg-orange-400/90">
                    <a href="mailto:horsforthinbloom@gmail.com?subject=Volunteer Interest">
                      Send us an email
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                    <a href="https://www.facebook.com/HorsforthInBloom" target="_blank" rel="noopener noreferrer">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      We work throughout Horsforth, maintaining various sites including the town center, 
                      parks, and residential areas. Contact us to find out about our current projects 
                      and how you can get involved in your local area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">When We Meet</h3>
                    <p className="text-gray-600">
                      Our volunteer sessions typically take place on weekends and weekday evenings, 
                      depending on the season and project needs. We'll work with your schedule to 
                      find times that work for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gradient-to-br from-pink-500/5 to-green-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover more about local community groups and activities in Horsforth
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Community Links</h3>
              <p className="text-gray-700 mb-6">
                For more information about local community groups, events, and activities in Horsforth, 
                visit our comprehensive local links directory.
              </p>
              <Button asChild size="lg" className="bg-green-400 hover:bg-green-400/90">
                <a 
                  href="https://horsforth.town/links/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit horsforth.town/links/
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
