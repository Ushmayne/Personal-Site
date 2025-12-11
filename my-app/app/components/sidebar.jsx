import {
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/outline";

import Image from "next/image";

export default function Sidebar() {
  return (
  <nav className="fixed left-0 top-0 h-screen w-[16rem] bg-[#121212] text-gray-200 p-6 pl-0 shadow-lg flex flex-col z-50">

      
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
      
      

      <ul className="space-y-8 list-none mt-40 w-full pl-6">

        <li>
          <a
            href="/"
            className="flex items-center w-full justify-start space-x-3 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-150"
          >
            <HomeIcon className="w-5 h-5 flex-shrink-0" width={20} height={20} />
            <span className="text-2xl font-semibold">Home</span>
          </a>
        </li>

        <li>
          <a
            href="/resume"
            className="flex items-center w-full justify-start space-x-3 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-150"
          >
            <DocumentTextIcon className="w-5 h-5 flex-shrink-0" width={20} height={20} />
            <span className="text-2xl font-semibold">Resume</span>
          </a>
        </li>

        <li>
          <a
            href="/projects"
            className="flex items-center w-full justify-start space-x-3 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-150"
          >
            <FolderIcon className="w-5 h-5 flex-shrink-0" width={20} height={20} />
            <span className="text-2xl font-semibold">Projects</span>
          </a>
        </li>

        <li>
          <a
            href="/hobbies"
            className="flex items-center w-full justify-start space-x-3 text-left text-gray-200 no-underline pl-2 py-2 rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-150"
          >
            <PuzzlePieceIcon className="w-5 h-5 flex-shrink-0" width={20} height={20} />
            <span className="text-2xl font-semibold">Hobbies</span>
          </a>
        </li>

      </ul>

    </nav>
  );
}