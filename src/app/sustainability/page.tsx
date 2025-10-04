import { Leaf, Recycle, Heart, Sprout } from "lucide-react";

export const metadata = {
  title: "Sustainability - Horsforth in Bloom",
  description: "Learn about Horsforth in Bloom's commitment to sustainable gardening practices, moving away from annual flowers in favor of wildflowers, edibles, fruit and herbs.",
  keywords: "sustainability, wildflowers, edibles, herbs, fruit, sustainable gardening, Horsforth",
};

export default function Sustainability() {
  const benefits = [
    {
      icon: Leaf,
      title: "Wildflower Meadows",
      description: "We're creating beautiful wildflower meadows that provide year-round habitat for pollinators and wildlife, while requiring minimal maintenance."
    },
    {
      icon: Sprout,
      title: "Edible Landscapes",
      description: "Many of our sites now feature edible plants including herbs, vegetables, and fruit trees that provide both beauty and practical benefits for the community."
    },
    {
      icon: Recycle,
      title: "Reduced Waste",
      description: "By moving away from annual flowers, we significantly reduce the waste associated with seasonal planting and create more permanent, self-sustaining landscapes."
    },
    {
      icon: Heart,
      title: "Community Health",
      description: "Our sustainable approach promotes community health through access to fresh herbs and vegetables, while creating spaces that support mental wellbeing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-400">Sustainable</span> Approach
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Horsforth in Bloom is committed to creating beautiful, sustainable landscapes that benefit 
              both our community and the environment for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Moving Beyond <span className="text-pink-500">Annual Flowers</span>
              </h2>
              <p className="mb-6">
                Traditional annual flower displays, while beautiful, require significant resources including 
                water, fertilizers, and frequent replanting. At Horsforth in Bloom, we're embracing a more 
                sustainable approach that creates lasting beauty while supporting our local ecosystem.
              </p>
              
              <p className="mb-6">
                Our shift towards wildflowers, edibles, fruit, and herbs represents a fundamental change 
                in how we think about community gardening. Instead of creating temporary displays that need 
                constant renewal, we're building permanent landscapes that grow more beautiful and beneficial 
                with each passing year.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                The <span className="text-orange-400">Benefits</span> of Our Approach
              </h3>
              <p className="mb-6">
                This sustainable approach brings numerous advantages to both our community and the environment:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gradient-to-br from-green-400/5 to-orange-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-400/10 rounded-full mr-4">
                    <benefit.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-gradient-to-br from-white to-pink-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wildflowers: Nature's Own Garden</h3>
              <p className="mb-6">
                Our wildflower areas are carefully selected to include native species that thrive in 
                Yorkshire's climate. These areas require minimal maintenance once established, provide 
                year-round interest, and create vital habitat for bees, butterflies, and other pollinators. 
                The changing seasons bring different colors and textures, creating a dynamic landscape 
                that's always interesting to explore.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Edible Landscapes: Beauty You Can Taste</h3>
              <p className="mb-6">
                Many of our sites now feature edible plants that serve dual purposes. Herbs like rosemary, 
                lavender, and thyme provide beautiful foliage and flowers while offering culinary benefits 
                to community members. Fruit trees and berry bushes create attractive focal points while 
                providing seasonal harvests. Vegetable gardens in public spaces demonstrate sustainable 
                growing practices and inspire residents to try their own growing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
              <p className="mb-6">
                Our sustainable approach significantly reduces our environmental footprint. By eliminating 
                the need for annual replanting, we reduce waste, water usage, and the carbon footprint 
                associated with transporting and maintaining temporary displays. Our permanent plantings 
                also help improve air quality, reduce soil erosion, and create carbon sinks that benefit 
                the local environment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Education</h3>
              <p className="mb-6">
                Our sustainable gardens serve as living classrooms where community members can learn about 
                native plants, sustainable growing practices, and the importance of biodiversity. We regularly 
                host educational sessions and workshops to share knowledge about sustainable gardening 
                techniques that residents can apply in their own gardens.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-term Vision</h3>
              <p className="mb-6">
                Our commitment to sustainability extends beyond individual plantings. We're working to create 
                a network of connected green spaces throughout Horsforth that support wildlife corridors, 
                improve air quality, and provide educational opportunities for future generations. Each 
                sustainable planting is a step towards a greener, more resilient community.
              </p>

              <div className="bg-green-400/5 border-l-4 border-green-400 p-6 rounded-r-lg mt-8">
                <p className="text-gray-700 font-medium">
                  <strong>Join Our Mission:</strong> If you're interested in learning more about sustainable 
                  gardening or would like to help us implement these practices in new areas, we'd love to 
                  hear from you. Together, we can create a more sustainable future for Horsforth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
