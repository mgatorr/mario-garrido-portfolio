import React from "react";
import Image from "next/image";
import profile from "../public/Profile.jpg";

const About = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center lg:flex lg:flex-row lg:items-center lg:text-left lg:space-x-5 lg:-mx-4">
        <article className="lg:px-4 lg:mt-12">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Hey there,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              My name is Mario Garrido; I’m a tech enthusiast and I’ve been working as a software engineer in different roles for about eight years, such as tech lead, backend, web3, and full-stack developer. Currently, I’m working as a VP Lead Software Engineer at JPMorgan Chase & Co.
            </p>
            <p className="mb-4">
              This website is under construction, but you can check my social media profiles or contact me through the links below.
            </p>
          </div>
        </article>
        <div className="flex-shrink-0 mb-10 lg:mt-12 lg:px-4">
          <Image
            src={profile}
            alt="Mario Garrido's Profile Picture"
            priority
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 250px"
          />
        </div>
      </div>
    </section>
  );
};

export default About;