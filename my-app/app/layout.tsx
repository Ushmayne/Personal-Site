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
  title: {
    default: "Usman Naveed — Software Developer",
    template: "%s | Usman Naveed",
  },
  description:
    "Usman Naveed — software developer. I design and build web apps, tools, and personal sites.",
  keywords: ["Usman Naveed", "software developer", "portfolio", "Windsor Ontario", "web development", "game development"],
  authors: [{ name: "Usman Naveed" }],
  openGraph: {
    type: "website",
    title: "Usman Naveed — Software Developer",
    description:
      "Software developer based in Windsor, Ontario. Check out my projects, resume, and hobbies.",
    siteName: "Usman Naveed",
  },
  twitter: {
    card: "summary",
    title: "Usman Naveed — Software Developer",
    description:
      "Software developer based in Windsor, Ontario. Check out my projects, resume, and hobbies.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${martel.variable} ${ibmPlexMono.variable} ${barlowSemiCondensed.variable}`}>
      <body>
        <Nav />
        <IdCard />
        <main className="p-4 md:p-6 text-cabin-text">{children}</main>
      </body>
    </html>
  );
}
