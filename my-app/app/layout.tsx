import type { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import Sidebar from "./components/sidebar";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata = {
  title: "Usman Naveed",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="flex flex-col md:flex-row bg-cabin-bg font-sans">
        <Sidebar />
        <main className="md:ml-[16rem] p-6 flex-1 text-cabin-text">
          {children}
        </main>
      </body>
    </html>
  );
}