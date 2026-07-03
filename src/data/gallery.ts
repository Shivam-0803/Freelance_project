export type GalleryCategory =
  | "Land Clearing"
  | "Site Prep"
  | "Land Leveling"
  | "Dirt Hauling"
  | "Pond Building"
  | "Road Construction"
  | "House Pads"
  | "Equipment & Crew";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/land-clearing-dozer-treeline-01.jpg",
    alt: "Bulldozer clearing land along a tree line during a Canton, Mississippi land clearing project",
    width: 1157,
    height: 1157,
    category: "Land Clearing",
  },
  {
    src: "/images/gallery/land-clearing-cab-view-01.jpg",
    alt: "View from inside the equipment cab of a bulldozer clearing a building site",
    width: 960,
    height: 540,
    category: "Land Clearing",
  },
  {
    src: "/images/gallery/site-prep-sheepsfoot-roller-01.jpg",
    alt: "Sheepsfoot roller compacting soil during site preparation",
    width: 960,
    height: 540,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/site-prep-sheepsfoot-roller-02.jpg",
    alt: "Sheepsfoot roller compacting a wide graded site",
    width: 960,
    height: 540,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/excavation-cat-dozer-cut-01.jpg",
    alt: "CAT bulldozer cutting a grade bank on a Canton, Mississippi excavation site",
    width: 960,
    height: 540,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/site-prep-cleared-field-01.jpg",
    alt: "Truck parked beside a large cleared and graded field ready for construction",
    width: 960,
    height: 540,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/site-prep-commercial-lot-01.jpg",
    alt: "Site preparation equipment compacting a commercial lot",
    width: 960,
    height: 720,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/demolition-debris-removal-01.jpg",
    alt: "Concrete debris cleared during a commercial site preparation project",
    width: 960,
    height: 720,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/site-prep-dozer-roller-compaction-01.jpg",
    alt: "Bulldozer and roller compacting a commercial site pad",
    width: 960,
    height: 720,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/site-prep-finished-commercial-lot-01.jpg",
    alt: "Finished, compacted commercial lot ready for paving",
    width: 960,
    height: 720,
    category: "Site Prep",
  },
  {
    src: "/images/gallery/land-leveling-tractor-scraper-01.jpg",
    alt: "Tractor and land plane leveling a graded field",
    width: 960,
    height: 540,
    category: "Land Leveling",
  },
  {
    src: "/images/gallery/land-leveling-tractor-scraper-02.jpg",
    alt: "Tractor pulling a land plane across a cleared field with a dozer working in the background",
    width: 960,
    height: 540,
    category: "Land Leveling",
  },
  {
    src: "/images/gallery/land-leveling-tractor-scraper-03.jpg",
    alt: "Farm tractor towing a land plane to level dirt on a construction site",
    width: 960,
    height: 540,
    category: "Land Leveling",
  },
  {
    src: "/images/gallery/land-leveling-tractor-scraper-04.jpg",
    alt: "Land plane grading attachment leveling dirt on an active job site",
    width: 960,
    height: 540,
    category: "Land Leveling",
  },
  {
    src: "/images/gallery/land-leveling-tractor-scraper-05.jpg",
    alt: "Tractor pulling a land plane along a graded ridge",
    width: 960,
    height: 540,
    category: "Land Leveling",
  },
  {
    src: "/images/gallery/land-leveling-graded-field-01.jpg",
    alt: "Wide view of a freshly leveled and graded construction site",
    width: 960,
    height: 540,
    category: "Land Leveling",
  },
  {
    src: "/images/gallery/dirt-hauling-dozer-loader-01.jpg",
    alt: "Dozer loading dirt for hauling on an active job site",
    width: 960,
    height: 540,
    category: "Dirt Hauling",
  },
  {
    src: "/images/gallery/dirt-hauling-dozer-transport-01.jpg",
    alt: "Bulldozer being loaded onto a lowboy trailer for transport between job sites",
    width: 960,
    height: 720,
    category: "Dirt Hauling",
  },
  {
    src: "/images/gallery/pond-building-excavation-01.jpg",
    alt: "Freshly excavated pond filling with water during a pond building project",
    width: 960,
    height: 540,
    category: "Pond Building",
  },
  {
    src: "/images/gallery/pond-building-water-tower-01.jpg",
    alt: "Excavation crew working near a pond site with the Canton water tower in the background",
    width: 960,
    height: 540,
    category: "Pond Building",
  },
  {
    src: "/images/gallery/pond-building-finished-water-01.jpg",
    alt: "Newly excavated pond holding water in the late afternoon light",
    width: 960,
    height: 540,
    category: "Pond Building",
  },
  {
    src: "/images/gallery/pond-building-finished-02.jpg",
    alt: "Completed pond surrounded by cleared land",
    width: 960,
    height: 540,
    category: "Pond Building",
  },
  {
    src: "/images/gallery/pond-building-finished-water-tower-01.jpg",
    alt: "Finished pond with the Canton, Mississippi water tower visible in the distance",
    width: 960,
    height: 540,
    category: "Pond Building",
  },
  {
    src: "/images/gallery/road-construction-excavator-dozer-01.jpg",
    alt: "Excavator and bulldozer working together to shape a road grade",
    width: 960,
    height: 540,
    category: "Road Construction",
  },
  {
    src: "/images/gallery/road-construction-excavator-commercial-01.jpg",
    alt: "Excavator clearing a commercial lot for road and site development",
    width: 720,
    height: 960,
    category: "Road Construction",
  },
  {
    src: "/images/gallery/house-pad-construction-01.jpg",
    alt: "Graded house pad ready for construction on a wooded lot",
    width: 960,
    height: 540,
    category: "House Pads",
  },
  {
    src: "/images/gallery/bulldozer-service-detail-01.jpg",
    alt: "Close-up of a CAT bulldozer engine compartment during equipment service",
    width: 960,
    height: 540,
    category: "Equipment & Crew",
  },
  {
    src: "/images/gallery/bulldozer-service-track-repair-01.jpg",
    alt: "Bulldozer undercarriage and track being repaired on site",
    width: 960,
    height: 540,
    category: "Equipment & Crew",
  },
  {
    src: "/images/gallery/land-survey-excavation-team-01.jpg",
    alt: "Nichols and Sons Construction crew surveying an excavation site near the Canton water tower",
    width: 960,
    height: 540,
    category: "Equipment & Crew",
  },
  {
    src: "/images/gallery/company-truck-ford-f250-01.jpg",
    alt: "Nichols and Sons Construction service truck",
    width: 2048,
    height: 1536,
    category: "Equipment & Crew",
  },
  {
    src: "/images/gallery/company-truck-dually-01.jpg",
    alt: "Nichols and Sons Construction dually truck parked at a commercial job site",
    width: 960,
    height: 720,
    category: "Equipment & Crew",
  },
  {
    src: "/images/gallery/equipment-trailer-loading-01.jpg",
    alt: "Heavy equipment trailer prepared for a job site in Canton, Mississippi",
    width: 320,
    height: 240,
    category: "Equipment & Crew",
  },
  {
    src: "/images/gallery/commercial-site-exterior-01.jpg",
    alt: "Commercial building exterior adjacent to a Nichols and Sons Construction project site",
    width: 960,
    height: 720,
    category: "Equipment & Crew",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Land Clearing",
  "Site Prep",
  "Land Leveling",
  "Dirt Hauling",
  "Pond Building",
  "Road Construction",
  "House Pads",
  "Equipment & Crew",
];
