import {
  TreePine,
  Route,
  Droplets,
  LayoutGrid,
  Home,
  Truck,
  LandPlot,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    slug: "land-clearing",
    title: "Land Clearing",
    description:
      "Trees, brush, stumps, and debris removed cleanly so your property is open, usable, and ready for the next phase of work.",
    icon: TreePine,
    image: "/images/gallery/land-clearing-dozer-treeline-01.jpg",
  },
  {
    slug: "road-construction",
    title: "Road Construction",
    description:
      "Private roads and driveways cut, graded, and compacted for reliable access on residential and commercial sites.",
    icon: Route,
    image: "/images/gallery/road-construction-excavator-dozer-01.jpg",
  },
  {
    slug: "pond-building",
    title: "Pond Building",
    description:
      "Custom pond excavation and shaping, from the first cut to a finished waterline, built for Mississippi soil.",
    icon: Droplets,
    image: "/images/gallery/pond-building-finished-water-tower-01.jpg",
  },
  {
    slug: "site-preparation",
    title: "Site Preparation",
    description:
      "Clearing, stripping, and compaction that leaves a clean, stable pad ready for foundations or paving.",
    icon: LayoutGrid,
    image: "/images/gallery/site-prep-sheepsfoot-roller-01.jpg",
  },
  {
    slug: "house-pad-construction",
    title: "House Pad Construction",
    description:
      "Graded, compacted house pads built to proper elevation and drainage before the first foundation stake goes in.",
    icon: Home,
    image: "/images/gallery/house-pad-construction-01.jpg",
  },
  {
    slug: "dirt-hauling",
    title: "Dirt Hauling",
    description:
      "Fill dirt and spoil hauled in or off site with the right equipment for the job, keeping projects on schedule.",
    icon: Truck,
    image: "/images/gallery/dirt-hauling-dozer-loader-01.jpg",
  },
  {
    slug: "land-leveling",
    title: "Land Leveling",
    description:
      "Precision grading that shapes uneven ground into usable, well-drained land for building, farming, or pasture.",
    icon: LandPlot,
    image: "/images/gallery/land-leveling-graded-field-01.jpg",
  },
  {
    slug: "bulldozer-service",
    title: "Bulldozer Service",
    description:
      "Dozer work for pushing, cutting, and shaping earth on projects of any size, backed by well-maintained iron.",
    icon: Wrench,
    image: "/images/gallery/bulldozer-service-track-repair-01.jpg",
  },
];

export const featuredServices = [
  services[0], // Land Clearing
  services[3], // Site Prep
  services[5], // Dirt Hauling
  services[6], // Land Leveling
];
