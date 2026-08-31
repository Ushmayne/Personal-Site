import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Oswald, Martel, IBM_Plex_Mono, Barlow_Semi_Condensed } from "next/font/google";
import Nav from "./components/Nav";
import IdCard from "./components/IdCard";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const martel = Martel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-martel",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-barlow-sc",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usmannaveed.ca"),
  title: {
    default: "Usman Naveed — Software Developer",
    template: "%s | Usman Naveed",
  },
  description:
    "Usman Naveed — software developer. I design and build web apps, tools, and personal sites.",
  keywords: ["Usman Naveed", "software developer", "portfolio", "Ontario", "web development", "game development"],
  authors: [{ name: "Usman Naveed" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Usman Naveed — Software Developer",
    description:
      "Software developer based Ontario. Check out my projects, resume, and hobbies.",
    siteName: "Usman Naveed",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Usman Naveed — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Naveed — Software Developer",
    description:
      "Software developer based Ontario. Check out my projects, resume, and hobbies.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usman Naveed",
  url: "https://usmannaveed.ca",
  jobTitle: "Software Developer",
  image: "https://usmannaveed.ca/id.jpg",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  sameAs: [
    "https://github.com/Ushmayne",
    "https://www.linkedin.com/in/usman-naveed-2b9baa191/",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${martel.variable} ${ibmPlexMono.variable} ${barlowSemiCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <IdCard />
        <main className="p-4 md:p-6">{children}</main>
      </body>
    </html>
  );
}
