import {
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/outline";

import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className="sidebar fixed left-0 top-0 h-screen w-[16rem] bg-[#121212] shadow-lg flex flex-col z-50 px-4 py-6" >

      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold leading-tight">
          Usman
        </h1>
        <span className="text-blue-100 block text-lg">// Software Dev</span>
      </div>

      <ul className="space-y-8 list-none mt-40 w-full px-2">

        <li>
          <a
            href="/"
            className="flex items-center w-full space-x-4 pl-2 py-2 rounded-md text-gray-300 visited:text-gray-300 no-underline focus:outline-none"
          >
            <HomeIcon className="w-6 h-6 flex-shrink-0" width={24} height={24} />
            <span className="text-2xl font-semibold">Home</span>
          </a>
        </li>

        <li>
          <a
            href="/resume"
            className="flex items-center w-full justify-start space-x-4 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent focus:outline-none"
          >
            <DocumentTextIcon className="w-6 h-6 flex-shrink-0" width={24} height={24} />
            <span className="text-2xl font-semibold">Resume</span>
          </a>
        </li>

        <li>
          <a
            href="/projects"
            className="flex items-center w-full justify-start space-x-4 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent focus:outline-none"
          >
            <FolderIcon className="w-6 h-6 flex-shrink-0" width={24} height={24} />
            <span className="text-2xl font-semibold">Projects</span>
          </a>
        </li>

        <li>
          <a
            href="/hobbies"
            className="flex items-center w-full justify-start space-x-4 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent focus:outline-none"
          >
            <PuzzlePieceIcon className="w-6 h-6 flex-shrink-0" width={24} height={24} />
            <span className="text-2xl font-semibold">Hobbies</span>
          </a>
        </li>

      </ul>

    </nav>
  );
}
