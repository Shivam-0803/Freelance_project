import { Marquee } from "@/components/ui/Marquee";

const tickerItems = [
  "Land Clearing",
  "Site Preparation",
  "Dirt Hauling",
  "Land Leveling",
  "Pond Building",
  "Road Construction",
  "House Pads",
  "Bulldozer Service",
  "Canton, MS",
  "Madison County, MS",
];

export function TickerBar() {
  return <Marquee items={tickerItems} tone="clay" reverse />;
}
