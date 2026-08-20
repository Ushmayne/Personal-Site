import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import Nav from "./components/Nav";
import IdCard from "./components/IdCard";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Nav />
        <IdCard />
        <main className="p-4 md:p-6 text-cabin-text">{children}</main>
      </body>
    </html>
  );
}
