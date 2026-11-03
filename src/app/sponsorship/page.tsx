import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata = {
  title: "Sponsorship - Horsforth in Bloom",
  description:
    "Support Horsforth in Bloom through a donation or local business sponsorship, helping fund planting, maintenance and community projects.",
};

const sponsors = [
  "Align Healthcare",
  "Slow Rise Bakery",
  "S R Pilates",
  "Talbutt Office Interiors",
  "Tomlinson Carpentry",
  "Truly Scrummy",
  "Wormalds Funeral Service",
];

export default function Sponsorship() {
  return (
    <div className="min-h-screen">
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-700">Sponsorship</span>
          </h1>
          <div className="max-w-3xl text-lg leading-relaxed text-gray-700 space-y-5">
            <p>
              Horsforth in Bloom is a volunteer-led group, dedicated to making
              Horsforth greener and more sustainable. We receive very little
              public funding – every planter and flower bed is made possible by
              local people and sponsorship from local businesses.
            </p>
            <p>
              Your sponsorship directly funds the planting, maintenance and
              community projects that make Horsforth a place we are all proud
              of. Together we are creating a welcoming, attractive and
              sustainable environment for residents, visitors and local
              businesses alike.
            </p>
            <p>
              We are deeply grateful to all our generous sponsors whose
              sponsorship makes a huge difference to our community.
            </p>
            <p>
              Whether you are an individual interested in donating or a business
              interested in sponsorship we are very grateful for your support.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-gray-900"
            >
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Sponsorship%20enquiry`}
              >
                Enquire about sponsorship
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Your Business Gains by Supporting Horsforth in Bloom
            </h2>
            <p className="mb-5">
              Your donation is a partnership that strengthens your connection to
              the community.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Increased visibility across Horsforth</li>
              <li>
                Positive association with community pride and sustainability
              </li>
              <li>Recognition across our social media channels</li>
              <li>
                A physical presence through signage and leaflets at places such
                as the Green Festival and some Farmers Markets
              </li>
              <li>
                Contribution to making Horsforth a welcoming destination for
                customers, clients and visitors
              </li>
            </ul>
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Donate or Become a Sponsor
            </h2>
            <p className="mb-5">
              To make a donation, please{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Donation%20enquiry`}
                className="text-orange-700 underline underline-offset-4"
              >
                contact us for donation details
              </a>
              .
            </p>
            <p className="mb-5">
              Most businesses choose to have a sign with their logo attached to
              one of our planters. The signs are made using your logo and remain
              on the planter for the whole year. If you are interested to find
              out more please contact us to discuss which planters are available
              and costs.
            </p>
            <Link
              href="/contact"
              className="text-orange-700 hover:underline font-medium"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Thank You to Our Sponsors
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-lg text-gray-800">
            {sponsors.map((sponsor) => (
              <li key={sponsor}>{sponsor}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
