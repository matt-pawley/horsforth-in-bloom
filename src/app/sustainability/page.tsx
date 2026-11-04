import { Heart, Leaf, Recycle, Sprout, Target, Users } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Sustainability - Horsforth in Bloom",
  description:
    "Learn about Horsforth in Bloom's commitment to sustainable gardening practices, moving away from annual flowers in favour of wildflowers, edibles, fruit and herbs.",
  keywords:
    "sustainability, wildflowers, edibles, herbs, fruit, sustainable gardening, Horsforth",
};

export default function Sustainability() {
  const benefits = [
    {
      icon: Leaf,
      title: "Wildflower Meadows",
      description:
        "We're creating beautiful wildflower type planting that provides year-round habitat for pollinators and wildlife, while requiring minimal maintenance. Rather than relying on strimmers, which often use plastic cutting lines and petrol-powered engines, we've embraced the traditional art of scything. It's a quieter, more sustainable way to manage our wildflower patches, helping us care for nature while minimising our environmental impact.",
    },
    {
      icon: Sprout,
      title: "Edible Planting",
      description:
        "Some of our sites now feature edible plants including herbs and fruit trees to provide both locally grown food as well as being beautiful.",
    },
    {
      icon: Recycle,
      title: "Reuse, Reduce and Recycle",
      description:
        "We no longer cut back plants at the end of summer but now leave old upright stems to benefit overwintering wildlife.\n\nWe sometimes use the 'chop and drop' technique, whereby early in the growing season old stems are cut, chopped and left on the soil surface as a mulch.\n\nWe collect fallen leaves from planting beds and paving, storing them in the leafmould bins we have created in Horsforth Hall Park. Some weeds and clippings are composted. We use the compost and leafmould on our planted areas and raised beds. Litter is picked from the garden areas and disposed of or recycled.",
    },
    {
      icon: Heart,
      title: "Wellbeing",
      description:
        "Our sustainable approach promotes community wellbeing through providing access to nature on your doorstep, beautiful planting as well as with fresh herbs and fruit to pick and enjoy.",
    },
    {
      icon: Target,
      title: "Long-term Vision",
      description:
        "Our commitment to sustainability extends beyond individual plantings. We're working to create a network of connected green spaces throughout Horsforth that support wildlife corridors, improve air quality, and provide opportunities for future generations. Each sustainable planting is a step towards a greener, more resilient community.",
    },
    {
      icon: Users,
      title: "Join Our Mission",
      description:
        "If you're interested in learning more about sustainable gardening or would like to help us implement these practices in new areas, we'd love to hear from you. Together, we can create a more sustainable future for Horsforth.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-3xl">
            <h1 className="page-title">
              Our <span className="text-forest">Sustainable</span> Approach
            </h1>
            <p className="page-intro">
              Horsforth in Bloom is committed to creating beautiful, sustainable
              planting that benefit both our community and the environment for
              years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-space">
        <div className="site-container grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-16 items-start">
          <div className="max-w-3xl">
            <div className="prose-body">
              <h2 className="section-title mb-6">
                Moving Beyond{" "}
                <span className="text-forest">Annual Bedding</span>
              </h2>
              <p className="mb-6">
                Traditional annual bedding displays, while beautiful, require
                significant resources including water, fertilisers, and frequent
                replanting. At Horsforth in Bloom, we're embracing a more
                sustainable approach that creates lasting beauty while
                supporting nature
              </p>

              <p className="mb-6">
                Our shift towards using perennial plants, herbs, shrubs and
                trees, recycling green waste and using peat free compost reflect
                changes that many of us are making to garden more sustainably.
                The aim is to create beautiful spaces composed of plants that
                suit the conditions they are growing in.
              </p>

              <h3 className="text-2xl font-semibold text-forest mb-4 mt-10">
                The <span className="text-forest">Benefits</span> of Our
                Approach
              </h3>
              <p className="mb-6">
                This sustainable approach brings numerous advantages to both our
                community and the environment:
              </p>
            </div>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-[4/5] content-photo overflow-hidden">
            <Image
              src="/sites/Old Burial Ground /007.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-space pt-0">
        <div className="site-container">
          <div className="practice-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="practice-item">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0 bg-mist rounded-xl">
                    <benefit.icon className="h-6 w-6 text-forest" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest pt-1.5">
                    {benefit.title}
                  </h3>
                </div>
                <div className="prose-body">
                  {benefit.description.split("\n\n").map((paragraph, index) => (
                    <p
                      key={`${benefit.title}-paragraph-${index}`}
                      className={index > 0 ? "mt-4" : ""}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
