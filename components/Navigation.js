import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white dark:bg-black md:py-6 md:mb-6">
      <div className="container mx-auto flex items-center justify-between px-1 lg:max-w-1xl">
        <Link
          href="/"
          className="font-medium text-gray-900 transition-colors hover:text-sky-500 dark:text-white uppercase tracking-wider"
        >
          <span className="text-base">Mario Garrido</span>
        </Link>
        <ThemeSwitch />
      </div>
      <div className="container mx-auto flex items-center justify-between px-1 lg:max-w-1xl">
        <p className="text-base-sm text-neutral-400">
          VP Lead Software Engineer at JPMorgan Chase & Co.
        </p>
      </div>
    </div>
  );
};

export default Navigation;