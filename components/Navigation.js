import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-1 mx-auto lg:max-w-1xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            <p className="text-base"> Mario Garrido</p>
          </a>
        </Link>
        <ThemeSwitch />
      </div>
      <div className="container px-1 mx-auto lg:max-w-1xl flex items-center justify-between">
        <p className="text-neutral-400 text-base-sm">
          VP Lead software engineer at JPMorgan Chase & Co.
        </p>
      </div>
    </div>
  );
};

export default Navigation;
