"use client";

import {
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  PuzzlePieceIcon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";

import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-[100] bg-[#121212] p-2 rounded-lg border border-gray-600 text-cabin-text"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav className={`sidebar fixed left-0 top-0 h-screen w-[16rem] bg-[#121212] shadow-lg flex flex-col z-40 py-6 overflow-hidden border-r border-gray-600 transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>


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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 flex justify-center">
              <PuzzlePieceIcon className="w-6 h-6 flex-shrink-0" width={24} height={60} />
            </div>
            <span className="text-lg font-semibold italic mt-[5px]">Hobbies</span>
          </a>
        </li>

        

      </ul>

    </nav>
    </>
  );
}
