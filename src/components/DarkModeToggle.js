'use client'
import { useTheme } from "next-themes";

export default function DarkModeToggle() {

  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="lg:fixed md:fixed top-4  right-4 bg-voile text-white p-2 rounded-full shadow-lg dark:bg-dark-background"
    >
      {theme === "light" ?   <svg
        id="sun-icon"
        class="w-6 h-6 text-yellow-500 dark:hidden"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.36 5.36l-.71-.71M6.05 6.05l-.71-.71m12.02 0l-.71.71M6.05 17.95l-.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"
        ></path>
      </svg> :  <svg
        id="moon-icon"
        class="w-6 h-6 text-blue-500 hidden dark:block"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
        ></path>
      </svg>}
    </button>
  );
}
