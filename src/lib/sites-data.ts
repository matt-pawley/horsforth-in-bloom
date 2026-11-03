import { sitePhotos } from "./site-photos";

export interface Site {
  slug: string;
  name: string;
  subheading?: string;
  description: string;
  thumbnail?: string;
  images: string[];
}

// Photo numbers in Cheryl's notes refer to the original gallery order.
const photos = (folder: keyof typeof sitePhotos, numbers?: number[]) =>
  numbers
    ? numbers.map((number) => sitePhotos[folder][number - 1])
    : [...sitePhotos[folder]];

const sites: Site[] = [
  {
    slug: "bulb-planting",
    name: "Bulb Planting",
    subheading: "in Various Locations",
    description:
      "Horsforth in Bloom plant bulbs in various locations to provide a splash of Spring colour. The purple crocuses on the triangle at the junction of Church Road and Church Lane were donated by Aireborough Rotary Club in recognition of their campaign to eradicate polio (a purple dot on a child's finger indicates they've received a polio vaccine).",
    images: photos("Bulb Planting "),
  },
  {
    slug: "community-orchards",
    name: "Community Orchards",
    description:
      "We have created and look after community orchards on King George Road, Broadfields and Featherbank Lane.",
    images: photos("Community Orchards"),
  },
  {
    slug: "crabtree-land",
    name: "Crabtree Land",
    subheading: "Town Street, opposite Morrisons",
    description:
      "Horsforth in Bloom care for the planters and the bed by the butchers on the boundaries of Crabtree Land car park.",
    images: photos("Crabtree Land"),
  },
  {
    slug: "fink-hill-and-jubilee-clock",
    name: "Fink Hill and Jubilee Clock",
    description:
      "A prominent location featuring beautiful planting around the Jubilee Clock and a perennial flower bed.",
    thumbnail: photos("Fink Hill and Jubilee Clock", [8])[0],
    images: photos(
      "Fink Hill and Jubilee Clock",
      [1, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    ),
  },
  {
    slug: "hall-park-natter-bench-and-tulip-tree",
    name: "Hall Park Natter Bench and Tulip Tree",
    description:
      "During Covid, Councillor Jonathan Taylor installed a 2.4m long natter bench which enabled social distancing. From April 2023 Horsforth in Bloom created and now looks after the planting around the Natter Bench, including the planting of a tulip tree bought by Horsforth in Bloom as part of the Queen's Green Canopy, to mark Queen Elizabeth II's Platinum Jubilee in 2022.",
    images: photos("Hall Park", [1, 2]),
  },
  {
    slug: "hall-park-hornbeam-tree",
    name: "Hall Park Hornbeam Tree",
    description:
      "A memorial was installed by the hornbeam tree in Hall Park (near the eastern entrance to the playground) to mark the centenary of the outbreak of WWI. Unfortunately this tree blew down in February 2020, so a new hornbeam tree was planted nearby in November 2020.",
    images: photos("Hall Park", [3, 4, 5, 6, 7]),
  },
  {
    slug: "hall-park-leafmould-and-compost-bins",
    name: "Hall Park Leafmould and Compost Bins",
    description:
      "We collect fallen leaves from planting beds and pavements, storing them in the leafmould bins we have created in Horsforth Hall Park. Some weeds and clippings are composted. We use the compost and leafmould on our planted areas and raised beds. Litter is picked from the garden areas and disposed of or recycled.",
    images: [],
  },
  {
    slug: "herb-garden",
    name: "Herb Garden",
    subheading: "Junction of King Edward Avenue and Broadgate Lane",
    description: "Herbs are grown here for all to pick and enjoy.",
    thumbnail: photos("Herb Garden", [4])[0],
    images: [...photos("Herb Garden"), ...photos("Pollination Corner", [8])],
  },
  {
    slug: "jubilee-garden",
    name: "Jubilee Garden",
    subheading: "Junction of Town Street and Church Lane",
    description:
      "A beautiful community garden space maintained by our volunteers, providing colour and interest throughout the seasons.",
    images: photos("Jubilee Gardens"),
  },
  {
    slug: "new-road-side-three-swords-bed",
    name: "New Road Side Three Swords Bed",
    description:
      "We've transformed the flower bed by The Three Swords into a beautiful perennial garden, designed to bring colour, texture and interest throughout the year. Striking red dogwoods provide structure and a vibrant splash of winter colour, complemented by a diverse mix of plants that keep the bed looking its best in every season. We've also introduced log piles to encourage fungi and provide valuable habitats for insects and other wildlife, helping to boost biodiversity and create a healthier urban ecosystem.",
    // These photos show the Three Swords bed; the conflicting Planters reference is recorded in docs/information-to-collect.md.
    images: photos("New Road Side", [1, 2, 3, 4, 5]),
  },
  {
    slug: "new-road-side-planters",
    name: "New Road Side Planters",
    description:
      "The planters on New Road Side are gradually being replaced as many have become old and decayed. The replacements are larger and more substantial, which is allowing us to plant larger and more sustainable plants in them whilst continuing displays with bulbs etc. Our newest addition is a collection of planters, built by local tradespeople, where we've carefully designed the planting to be drought tolerant and, hopefully, more resilient to the increasingly unpredictable weather.",
    images: photos("New Road Side", [7, 8, 9]),
  },
  {
    slug: "old-ball-bed",
    name: "Old Ball Bed",
    description:
      "Planting was inspired by the history of Horsforth to reflect the original ford for Horsforth. The yew hedges are horseshoe shaped and the planting is white and blue to reflect the importance of water on the boundaries of Horsforth.",
    thumbnail: photos("Old Ball Bed ", [4])[0],
    images: [
      ...photos("Old Ball Bed ", [2, 3, 4]),
      ...photos("Fink Hill and Jubilee Clock", [2, 12]),
    ],
  },
  {
    slug: "old-burial-ground",
    name: "Old Burial Ground",
    subheading: "Church Lane",
    // The start year is omitted until the 2006/2007 discrepancy is resolved.
    description:
      "The Old Burial Ground, owned by St. Margaret's church, is managed by Horsforth in Bloom as a wildflower meadow. More wildflowers are encouraged using yellow rattle, a plant that suppresses the vigorous grass. Common spotted orchid can now be seen in summer. The paths are regularly mown and the whole area cut in early autumn. This vegetation is removed to keep soil fertility low, benefitting wildflowers.",
    thumbnail: photos("Old Burial Ground ", [7])[0],
    images: photos("Old Burial Ground "),
  },
  {
    slug: "telephone-box",
    name: "Telephone Box",
    description:
      "The old telephone box at the top of Town Street is adopted by Horsforth in Bloom to provide seasonal displays throughout the year.",
    // Only the identifiable telephone-box photos are assigned here. See the collection checklist.
    images: photos("Other", [1, 2, 3]),
  },
  {
    slug: "pollination-corner",
    name: "Pollination Corner",
    subheading: "Corner of Church Lane and Church Road",
    description:
      "Two pollinator-friendly beds are maintained outside of St. Margaret's School by Horsforth in Bloom.",
    thumbnail: photos("Pollination Corner", [6])[0],
    images: photos("Pollination Corner", [1, 2, 3, 4, 5, 6, 7]),
  },
  {
    slug: "station-road",
    name: "Station Road",
    subheading: "walking down to Platform 2",
    description:
      "At the suggestion of a Horsforth in Bloom volunteer we adopted the bed alongside the walkway down to the train station and over the years have continued to adapt the planting.",
    thumbnail: photos("Station Road", [4])[0],
    images: photos("Station Road"),
  },
];

export function getSitesData(): Site[] {
  return sites
    .map((site) => ({ ...site, thumbnail: site.thumbnail ?? site.images[0] }))
    .sort((a, b) => a.name.localeCompare(b.name, "en-GB"));
}
