import React, { forwardRef } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ text, handleClick }, ref) => {
  return (
    <main
      className="flex flex-col-reverse items-center justify-center gap-8 h-auto px-12 pb-12 pt-32 bg-gradient-to-r from-white via-green-50 to-green-100
      lg:grid lg:grid-cols-2 lg:px-16 lg:pt-40 lg:pb-24"
      ref={ref}
    >
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold leading-tight lg:text-5xl">
          HI, <span className="text-green-700">I'M SHAHIL</span>.
        </h1>
        <h2 className="text-3xl font-semibold my-4 lg:text-5xl">
          <span className="text-green-700">A</span> FRONTEND DEVELOPER
        </h2>
        <p className="flex items-center justify-center gap-2 text-lg lg:text-xl mb-4">
          <span>DESIGN</span>
          <TiArrowRightThick
            className="text-green-700 text-2xl"
            aria-label="Arrow"
          />
          <span>BUILD</span>
          <TiArrowRightThick
            className="text-green-700 text-2xl"
            aria-label="Arrow"
          />
          <span>EXPERIENCE</span>
        </p>

        <p className="text-lg lg:text-xl px-4">
          I'm a Front-End Developer skilled in working with a variety of
          <span className="text-green-700 font-medium"> TECHNOLOGIES</span>,
          <span className="text-green-700 font-medium"> PLATFORMS</span>, and
          <span className="text-green-700 font-medium"> TOOLS</span> to create
          seamless web applications.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className="border px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition"
            onClick={() => handleClick("projects")}
          >
            Projects
          </button>
          <Link href="https://github.com/Crazydrooo?tab=repositories">
            <button className="border px-4 py-2 text-green-600 border-green-600 hover:bg-green-200 rounded-lg shadow-md transition">
              Github
            </button>
          </Link>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="h-60 w-60 rounded-full relative lg:h-[350px] lg:w-[350px]">
          <Image
            src="/Profile.jpg"
            fill={true}
            alt="img"
            className="rounded-full transition object-cover hover:scale-110"
          />
        </div>
      </section>
    </main>
  );
};

export default forwardRef(Hero);
