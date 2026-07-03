import { About } from "@/components/sections/About";
import { BusinessHours } from "@/components/sections/BusinessHours";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServiceButtons } from "@/components/sections/ServiceButtons";
import { Services } from "@/components/sections/Services";
import { TickerBar } from "@/components/sections/TickerBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TickerBar />
      <ServiceButtons />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <ServiceArea />
      <BusinessHours />
      <Contact />
    </>
  );
}
