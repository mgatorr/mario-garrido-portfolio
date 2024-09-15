import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between items-center lg:flex-row">
                    <p>By Mario Garrido</p>
                    <div className="flex flex-wrap pt-2 space-x-2 font-medium sm:space-x-4 lg:pt-0">
                        <Link
                            href="https://twitter.com/mgatorr"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-yellow-500"
                        >
                            Twitter
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/mgarridotorres/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-yellow-500"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://github.com/MarioGT90k"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-yellow-500"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://dev.to/mariogt"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-yellow-500"
                        >
                            DEV
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;