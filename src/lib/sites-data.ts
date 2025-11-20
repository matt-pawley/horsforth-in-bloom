import { readdir } from "fs/promises";
import { join } from "path";

export interface Site {
  name: string;
  subheading?: string;
  description: string;
  thumbnail: string;
  images: string[];
}

// Site metadata - descriptions and subheadings that aren't in the file structure
const siteMetadata: Record<string, Omit<Site, "thumbnail" | "images">> = {
  "Old Burial Ground": {
    name: "Old Burial Ground",
    subheading: "Church Lane",
    description:
      "The site is owned by St. Margaret's church. We took on the management of the Old Burial Ground several years ago and have improved the wildflowers by sowing the annual flower yellow rattle. This suppresses the growth of vigorous grasses allowing wildflowers to grow, including the common spotted orchid which flowers reliably. The paths are regularly mown throughout the summer.",
  },
  "Crabtree Land": {
    name: "Crabtree Land",
    subheading: "Town street, opposite Morrisons",
    description:
      "Crabtree Land is a beautiful community space that we maintain with regular planting and care throughout the year.",
  },
  "Fink Hill and Jubilee Clock": {
    name: "Fink Hill and Jubilee Clock",
    description:
      "A prominent location featuring beautiful seasonal planting around the Jubilee Clock, creating a welcoming entrance to Horsforth.",
  },
  "Hall Park": {
    name: "Hall Park",
    description:
      "During Covid Councillor Jonathan Taylor installed a 2.4m long natter bench which enabled social distancing. From April 2023 Horsforth in Bloom created and now looks after the planting around the Natter Bench, including the planting of a Tulip tree bought by Horsforth in Bloom as part of the Queen's Green Canopy.",
  },
  "Herb Garden": {
    name: "Herb Garden",
    subheading: "Junction of King Edward Avenue and Broadgate Lane",
    description: "Herbs are grown here for all to pick and enjoy",
  },
  "Jubilee Gardens": {
    name: "Jubilee Gardens",
    subheading: "Junction of Town Street and Church Lane",
    description:
      "A beautiful community garden space maintained by our volunteers, providing colour and interest throughout the seasons.",
  },
  "Old Ball Bed": {
    name: "Old Ball Bed",
    description:
      "Planting was inspired by the history of Horsforth to reflect the original ford for Horsforth. The yew hedges are horseshoe shaped and the planting is white and blue to reflect the importance of water on the boundaries of Horsforth.",
  },
  "New Road Side": {
    name: "New Road Side",
    description:
      "New Road Side includes many raised beds constructed from stone and timber",
  },
  "Pollination Corner": {
    name: "Pollination Corner",
    subheading: "Corner of Church Lane and Church Road",
    description:
      "The brick surrounds were originally painted in 2019 by pupils of St. Margaret's Primary School and Horsforth in Bloom volunteers.",
  },
  "Station Road": {
    name: "Station Road",
    description:
      "At the suggestion of a Horsforth in Bloom volunteer we adopted the bed alongside the walkway down to the train station and over the years have continued to adapt the planting.",
  },
  "Community Orchards": {
    name: "Community Orchards",
    description:
      "We have created and look after several community orchards across Horsforth.",
  },
  "Bulb Planting": {
    name: "Bulb Planting",
    subheading: "Junction of Church Road and Church Lane",
    description:
      "Horsforth in Bloom plant bulbs in various locations to provide a splash of Spring colour. The purple crocuses on the triangle at the junction of Church Road and Church Lane were donated by Aireborough Rotary Club in recognition of their campaign to eradicate polio (a purple dot on a child's finger indicates they've received a polio vaccine).",
  },
  Other: {
    name: "Other",
    description:
      "Additional sites and locations maintained by Horsforth in Bloom volunteers throughout the community.",
  },
};

// Map directory names to site names (handles trailing spaces and variations)
const directoryToSiteName: Record<string, string> = {
  "Old Burial Ground /": "Old Burial Ground",
  "Old Burial Ground": "Old Burial Ground",
  "Crabtree Land": "Crabtree Land",
  "Fink Hill and Jubilee Clock": "Fink Hill and Jubilee Clock",
  "Hall Park": "Hall Park",
  "Herb Garden": "Herb Garden",
  "Jubilee Gardens": "Jubilee Gardens",
  "Old Ball Bed /": "Old Ball Bed",
  "Old Ball Bed": "Old Ball Bed",
  "New Road Side": "New Road Side",
  "Pollination Corner": "Pollination Corner",
  "Station Road": "Station Road",
  "Community Orchards": "Community Orchards",
  "Bulb Planting /": "Bulb Planting",
  "Bulb Planting": "Bulb Planting",
  Other: "Other",
};

// Image file extensions to include
const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG"];

async function getImageFiles(dirPath: string): Promise<string[]> {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      if (entry.isFile()) {
        const ext = entry.name.substring(entry.name.lastIndexOf("."));
        if (imageExtensions.includes(ext)) {
          files.push(entry.name);
        }
      }
    }

    // Sort files naturally (001.jpg, 002.jpg, etc. or alphabetically)
    return files.sort((a, b) => {
      // Try to extract numbers for natural sorting
      const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
      if (numA !== numB) {
        return numA - numB;
      }
      return a.localeCompare(b);
    });
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

export async function getSitesData(): Promise<Site[]> {
  const sitesDir = join(process.cwd(), "public", "sites");
  const sites: Site[] = [];

  try {
    const entries = await readdir(sitesDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const dirName = entry.name;
        // Try exact match first, then trimmed match, then use trimmed as fallback
        const trimmedDirName = dirName.trim();
        const siteName =
          directoryToSiteName[dirName] ||
          directoryToSiteName[trimmedDirName] ||
          trimmedDirName;

        const dirPath = join(sitesDir, dirName);
        const imageFiles = await getImageFiles(dirPath);

        if (imageFiles.length > 0) {
          // Get metadata or use defaults
          const metadata = siteMetadata[siteName] || {
            name: siteName,
            description: `Images from ${siteName}, maintained by Horsforth in Bloom volunteers.`,
          };

          // Use first image as thumbnail
          const thumbnail = `/sites/${dirName}/${imageFiles[0]}`;
          const images = imageFiles.map(
            (file) => `/sites/${dirName}/${file}`,
          );

          sites.push({
            ...metadata,
            thumbnail,
            images,
          });
        }
      }
    }

    // Sort sites by name
    return sites.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Error reading sites directory:", error);
    return [];
  }
}

