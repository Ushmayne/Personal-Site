import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "My Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="ml-64"> {/* left margin for sidebar */}
          {children}
        </div>
      </body>
    </html>
  );
}