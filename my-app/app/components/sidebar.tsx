import {
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/outline";

import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className="sidebar fixed left-0 top-0 h-screen w-[16rem] bg-[#121212] shadow-lg flex flex-col z-50 py-6 overflow-hidden">


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

      <ul className="space-y-0 list-none mt-4 w-full">

        <li>
          <a
            href="/"
            className="nav-key"
          >
            <div className="w-8 flex justify-center">
              <HomeIcon className="w-6 h-6 flex-shrink-0" width={24} height={60} />
            </div>
            <span className="text-lg font-semibold italic mt-[5px]">Home</span>
          </a>
        </li>

        <li>
          <a
            href="/resume"
            className="nav-key"
          >
            <div className="w-8 flex justify-center">
              <DocumentTextIcon className="w-6 h-6 flex-shrink-0" width={24} height={60} />
            </div>
            <span className="text-lg font-semibold italic mt-[5px]">Resume</span>
          </a>
        </li>

        <li>
          <a
            href="/projects"
            className="nav-key"
          >
            <div className="w-8 flex justify-center">
              <FolderIcon className="w-6 h-6 flex-shrink-0" width={24} height={60} />
            </div>
            <span className="text-lg font-semibold italic mt-[5px]">Projects</span>
          </a>
        </li>

        <li>
          <a
            href="/hobbies"
            className="nav-key"
          >
            <div className="w-8 flex justify-center">
              <PuzzlePieceIcon className="w-6 h-6 flex-shrink-0" width={24} height={60} />
            </div>
            <span className="text-lg font-semibold italic mt-[5px]">Hobbies</span>
          </a>
        </li>

      </ul>

    </nav>
  );
}
