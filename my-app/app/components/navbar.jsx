import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col">
      <div className="flex flex-col h-full px-6 py-8">

        {/* Logo at top */}
        <div className="flex items-center justify-center mb-12">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Vertical Links */}
        <ul className="flex flex-col items-center space-y-8 list-none text-lg font-medium flex-1">
          {[
            { name: "Home", href: "/" },
            { name: "Resume", href: "/resume" },
            { name: "Projects", href: "/projects" },
            { name: "Hobbies", href: "/hobbies" },
          ].map((link) => (
            <li key={link.name} className="w-full">
              <a
                href={link.href}
                className="
                  block
                  no-underline
                  px-4 py-3
                  rounded-md
                  bg-white
                  shadow-sm
                  border border-gray-300
                  hover:bg-blue-600 hover:text-white hover:border-blue-600
                  transition
                  text-center
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}