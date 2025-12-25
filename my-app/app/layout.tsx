import Sidebar from "./components/sidebar";
import "./globals.css";

export const metadata = {
  title: "My Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-cabin-bg text-cabin-text">
        <Sidebar />
        <main className="ml-[16rem] p-6 flex-1 text-red-200">
          {children}
        </main>
      </body>
    </html>
  );
}