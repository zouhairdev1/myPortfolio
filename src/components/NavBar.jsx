'use client'
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import logoLight from '@/public/logoLight.png'
import logoDark from '@/public/logoDark.png'
import { Collapse } from 'flowbite';

import { useTheme } from "next-themes";

export default function NavBar(){
  const $targetEl = document.getElementById('targetEl');

  // optionally set a trigger element (eg. a button, hamburger icon)
  const $triggerEl = document.getElementById('triggerEl');
  
  // optional options with default values and callback functions
  const options = {
      onCollapse: () => {
          console.log('element has been collapsed');
      },
      onExpand: () => {
          console.log('element has been expanded');
      },
      onToggle: () => {
          console.log('element has been toggled');
      },
  };
  
  const instanceOptions = {
    id: 'targetEl',
    override: true
  };
  const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);
  const { theme } = useTheme();
    return(


<nav className="bg-white border-gray-200 dark:bg-gray-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    {/* Logo Section */}
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {
        theme === "light" ? 
        <Image
        src={logoLight}
        className="h-8  w-36"
        alt="Logo"
      />
        : 
        <Image
        src={logoDark}
        className="h-8  w-36"
        alt="Logo"
      />
      }
    
      
    </Link>

    {/* Right Side: Dark Mode Toggle & Hamburger */}
    <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
      <div className="flex justify-center  items-center">
         <DarkModeToggle />
      </div>
     
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>

    {/* Navbar Links */}
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-dark-background md:dark:bg-transparent dark:border-gray-700">
        <li>
          <Link
            href="/"
            className="block py-2 px-3 md:p-0 text-white bg-voile rounded md:bg-transparent md:text-voile md:dark:text-voile-light"
            
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-voile md:dark:hover:text-voile-light dark:text-white dark:hover:bg-gray-700 dark:hover:text-voile-light md:dark:hover:bg-transparent"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-voile md:dark:hover:text-voile-light dark:text-white dark:hover:bg-gray-700 dark:hover:text-voile-light md:dark:hover:bg-transparent"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-voile md:dark:hover:text-voile-light dark:text-white dark:hover:bg-gray-700 dark:hover:text-voile-light md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



    )
}