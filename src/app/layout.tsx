import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/data/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Excavation Contractor Canton, MS`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    site.seoKeyword,
    "land clearing Canton MS",
    "site preparation Canton Mississippi",
    "dirt hauling Canton MS",
    "land leveling Madison County MS",
    "pond building Mississippi",
    "bulldozer service Canton MS",
    "house pad construction Mississippi",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Excavation Contractor Canton, MS`,
    description: site.description,
    images: [
      {
        url: "/images/gallery/excavation-cat-dozer-cut-01.jpg",
        width: 960,
        height: 540,
        alt: `${site.name} — Excavation Contractor in Canton, Mississippi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Excavation Contractor Canton, MS`,
    description: site.description,
    images: ["/images/gallery/excavation-cat-dozer-cut-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  image: `${site.url}/images/gallery/excavation-cat-dozer-cut-01.jpg`,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.stateAbbr,
    addressCountry: "US",
  },
  areaServed: site.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [site.facebook],
  priceRange: "$$",
  slogan: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-heading">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCallButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
