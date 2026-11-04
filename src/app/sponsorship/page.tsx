import Image from "next/image";
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
      <section className="page-hero">
        <div className="site-container sponsor-intro">
          <div>
            <h1 className="page-title">
              <span className="text-forest">Sponsorship</span>
            </h1>
            <div className="hidden lg:block relative aspect-[4/5] overflow-hidden content-photo mt-8">
              <Image
                src="/sites/Crabtree Land/f4ec89e3-5325-414a-b994-f36e4f743d4b.jpg"
                alt=""
                fill
                sizes="450px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-3xl prose-body space-y-5">
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
            <Button asChild size="lg">
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Sponsorship%20enquiry`}
              >
                Enquire about sponsorship
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="max-w-3xl prose-body">
            <h2 className="section-title text-[1.75rem] mb-6">
              What Your Business Gains by Supporting Horsforth in Bloom
            </h2>
            <p className="mb-5">
              Your donation is a partnership that strengthens your connection to
              the community.
            </p>
            <ul className="sponsor-benefits list-disc pl-6 space-y-3">
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
            <h2 className="section-title text-[1.75rem] mt-12 mb-6">
              How to Donate or Become a Sponsor
            </h2>
            <p className="mb-5">
              To make a donation, please{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Donation%20enquiry`}
                className="text-forest underline underline-offset-4"
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
              className="text-forest hover:underline font-medium"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space bg-mist/60">
        <div className="site-container">
          <h2 className="section-title text-[1.75rem] mb-6">
            Thank You to Our Sponsors
          </h2>
          <ul className="sponsor-names text-lg text-forest">
            {sponsors.map((sponsor) => (
              <li key={sponsor}>{sponsor}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
