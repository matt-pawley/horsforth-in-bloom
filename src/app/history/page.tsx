export const metadata = {
  title: "History - Horsforth in Bloom",
  description:
    "Discover the history and journey of Horsforth in Bloom, from our founding to becoming a recognised community volunteer group.",
  keywords:
    "history, founding, community, volunteers, Horsforth in Bloom, timeline",
};

export default function History() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">History</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              The story of Horsforth in Bloom - from humble beginnings to
              becoming a recognised community force for positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Horsforth in Bloom started very slowly with a few volunteers,
                mainly with an interest and getting together in Horsforth Hall
                Park. As time progressed the volunteers expanded into Horsforth
                itself with one of the main objectives to plant hundreds of
                daffodils along the Ring Road and up to Low Lane.
              </p>
              <p className="mb-6">
                The number of volunteers grew in early 2005 and more established
                routine practices were taken on.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Hall Park
              </h3>
              <p className="mb-6">
                One of the many trees in Horsforth Hall Park is a lone Hornbeam
                tree which stands north of the park and close to Hall Lane. Due
                to an interest in the singularity of this tree and the
                connection with a story of a similar tree within the First World
                War at the Battle of the Somme, one of the volunteers built a
                monument at the side of the tree. Sadly the Hornbeam tree was
                blown down but the monument was saved. A similar tree was
                planted close to the monument.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Welcome Signs
              </h3>
              <p className="mb-6">
                The ring road towards Rodley and towards Weetwood have 'Welcome
                to Horsforth' signs incorporating a 'Fairtrade Town'. These
                directional signs have a wooden structure decorated with
                attractive flowers and other plants.
              </p>
              <p className="mb-6">
                A similar structure is up by Horsforth Golf Club. Two smaller
                signs are on the A65 by Kirkstall forge and the other by Rawdon
                crematorium.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Telephone Box
              </h3>
              <p className="mb-6">
                Horsforth in Bloom took on the responsibility of adopting the
                old fashioned red telephone kiosk that had been decommissioned
                on Town Street. This allowed us to use the telephone kiosk in
                various ways i.e. Decorating at Christmas with Christmas lights;
                Easter decorations; bulbs during Springtime; Commemoration at
                Armistice Day and Walk of Art. All other volunteer groups within
                Horsforth also use it to show any festival they are taking part
                in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
