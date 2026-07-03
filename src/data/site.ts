export const site = {
  name: "Nichols and Sons Construction",
  shortName: "Nichols and Sons",
  tagline: "Excavation & Land Clearing, Done Right",
  seoKeyword: "Excavation Contractor Canton MS",
  description:
    "Nichols and Sons Construction is a family-owned excavation contractor in Canton, Mississippi, providing land clearing, site preparation, dirt hauling, land leveling, pond building, road construction, house pad construction, and bulldozer service.",
  domain: "nicholsandsonsconstruction.com",
  url: "https://nicholsandsonsconstruction.com",
  phone: {
    display: "(601) 941-8288",
    e164: "+16019418288",
  },
  email: "leothasnichols@yahoo.com",
  location: {
    city: "Canton",
    state: "Mississippi",
    stateAbbr: "MS",
    display: "Canton, Mississippi",
    region: "Madison County, Mississippi",
  },
  facebook: "https://www.facebook.com/NicholsAndSonsTrucking/",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday – Sunday", time: "Appointment Only" },
  ],
  serviceAreas: [
    "Canton, MS",
    "Madison, MS",
    "Ridgeland, MS",
    "Flowood, MS",
    "Jackson, MS",
    "Vicksburg, MS",
    "Yazoo City, MS",
    "Carthage, MS",
  ],
} as const;

export const links = {
  tel: `tel:${site.phone.e164}`,
  sms: `sms:${site.phone.e164}`,
  mail: `mailto:${site.email}`,
  facebook: site.facebook,
};
