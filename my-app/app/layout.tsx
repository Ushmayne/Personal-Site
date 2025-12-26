import { IBM_Plex_Sans } from "next/font/google";
import Sidebar from "./components/sidebar";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata = {
  title: "My Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="flex bg-cabin-bg font-sans">
        <Sidebar />
        <main className="ml-[16rem] p-6 flex-1 text-cabin-text">
          {children}
        </main>
      </body>
    </html>
  );
}