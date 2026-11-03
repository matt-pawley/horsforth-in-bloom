import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HistoryYearNav } from "@/components/HistoryYearNav";
import { historyEntries } from "@/lib/history-data";

export const metadata = {
  title: "History - Horsforth in Bloom",
  description:
    "The history of Horsforth in Bloom, from its first Yorkshire in Bloom entry in 2004 to community planting, orchards and sustainable gardening.",
};

const captions: Record<string, string> = {
  "/history/image1.jpg": "Yorkshire Rose Town Summer Award, Gold, 2018",
  "/history/image2.jpg":
    "Evelyn Ingham, Freda Copley, Hilary Taylor, Gerald Ingham and Marie Edwards",
  "/history/image3.jpg": "Wildflowers in the Old Burial Ground",
  "/history/image4.jpg": "Planters on Crabtree Land, opposite Morrisons",
  "/history/image5.jpg": "Kobe Bed",
  "/history/image6.jpg": "Jubilee Clock",
  "/history/image7.jpg": "Silver birch tree planting",
  "/history/image8.jpg": "The WWI memorial by the hornbeam tree in Hall Park",
  "/history/image9.jpg": "A planted boot for Walk of Art",
  "/history/image10.jpg": "Leafmould bins in Hall Park",
  "/history/image11.jpg": "Volunteers at the Herb Garden",
  "/history/image12.jpg": "Volunteers at Pollination Corner",
  "/history/image13.jpg": "Planting beside the station walkway",
  "/history/image14.jpg": "The adopted telephone box on Town Street",
  "/history/image15.jpg": "Old Ball Bed, designed by Shanet Alexander",
  "/history/image16.jpg": "The replacement hornbeam tree in Hall Park",
  "/history/image17.jpg": "Jubilee Garden",
  "/history/image18.jpg": "Planting around the Natter Bench in Hall Park",
  "/history/image19.jpg":
    "The tulip tree planted as part of the Queen's Green Canopy",
};

function MilestonePhotos({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <div className={`grid gap-4 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {images.map((src) => (
        <figure key={src} className="min-w-0">
          <div
            className={`relative overflow-hidden rounded-lg bg-stone-100 ${images.length === 1 ? "aspect-[4/3] max-h-80" : "aspect-[4/3]"}`}
          >
            <Image
              src={src}
              alt={captions[src]}
              fill
              sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 400px"
              className="object-contain outline-1 -outline-offset-1 outline-black/10"
            />
          </div>
          <figcaption className="mt-2 text-xs leading-relaxed text-stone-600">
            {captions[src]}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function History() {
  return (
    <div className="bg-stone-50 text-stone-800">
      <section className="border-b border-stone-200 bg-orange-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <p className="mb-3 flex items-center gap-3 text-sm font-medium text-stone-600">
            <span
              className="h-2 w-2 rounded-full bg-green-700"
              aria-hidden="true"
            />
            Horsforth in Bloom <span aria-hidden="true">/</span> 2004–2023
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-green-950 mb-4 sm:mb-6">
            Our history
          </h1>
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-stone-600">
            From our first Yorkshire in Bloom entry in 2004, local volunteers
            have helped make Horsforth greener, one community project at a time.
          </p>
          <a
            href="#timeline"
            className="mt-7 hidden lg:inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-950"
          >
            Follow our story{" "}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-[160px_minmax(0,1fr)] gap-8 lg:gap-14">
        <aside>
          <HistoryYearNav years={historyEntries.map(({ year }) => year)} />
        </aside>

        <section
          id="timeline"
          aria-label="Horsforth in Bloom timeline"
          className="min-w-0 scroll-mt-4"
        >
          <ol className="relative before:absolute before:top-3 before:bottom-0 before:left-[7px] before:w-px before:bg-green-800/20">
            {historyEntries.map((entry, index) => (
              <li
                key={entry.year}
                className="relative pl-9 sm:pl-12 pb-12 sm:pb-16 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-[3px] border-stone-50 ${index === 0 ? "bg-orange-600 ring-1 ring-orange-600/30" : "bg-green-700 ring-1 ring-green-700/20"}`}
                />
                <article
                  id={`year-${entry.year}`}
                  aria-labelledby={`milestone-${entry.year}`}
                  className="scroll-mt-4"
                >
                  <time
                    dateTime={entry.year}
                    className="mb-3 inline-block text-sm font-semibold tabular-nums tracking-wide text-orange-800"
                  >
                    {entry.year}
                  </time>
                  <h2
                    id={`milestone-${entry.year}`}
                    className="text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-green-950 leading-snug text-balance mb-5"
                  >
                    {entry.title}
                  </h2>
                  <div
                    className={`grid gap-6 lg:gap-8 ${entry.images.length > 0 ? "xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : ""}`}
                  >
                    <div className="max-w-prose text-[15px] sm:text-base leading-relaxed text-stone-600 space-y-4">
                      {entry.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <MilestonePhotos images={entry.images} />
                  </div>
                  {index < historyEntries.length - 1 ? (
                    <div
                      className="mt-10 sm:mt-12 h-px bg-stone-200"
                      aria-hidden="true"
                    />
                  ) : null}
                </article>
              </li>
            ))}
          </ol>

          <div className="ml-9 sm:ml-12 mt-12 sm:mt-16 border-t border-green-900/15 pt-8 sm:pt-10">
            <h2 className="text-2xl font-semibold text-green-950 mb-3">
              Be part of Horsforth in Bloom
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-xl">
              Our story continues with the people who give their time to care
              for Horsforth. Come and join us.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-green-800 hover:underline underline-offset-4"
              >
                Volunteer with us{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex min-h-11 items-center font-medium text-stone-600 hover:text-green-900 hover:underline underline-offset-4"
              >
                Explore our gallery
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
