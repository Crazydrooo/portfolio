import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";

const ProjectCard = ({ imageSrc, title, repoLink, altText }) => (
  <div className="max-w-sm rounded shadow-2xl cursor-pointer">
    <div>
      <Image
        className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        src={imageSrc}
        width={300}
        height={300}
        alt={altText}
      />
    </div>
    <div
      className="
    flex items-center justify-between 
    p-3 sm:p-4 md:p-5 
    gap-3 
    max-w-full
  "
    >
      <h3
        className="
      font-bold 
      text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
      text-emerald-800 
      truncate
    "
        style={{ maxWidth: "70%" }} /* Adjust text width to prevent overlap */
      >
        {title}
      </h3>

      <Link href={repoLink}>
        <button
          className="
        border-emerald-800 border 
        px-2 py-1 sm:px-3 sm:py-2 
        rounded-md 
        bg-gradient-to-r from-green-100 to-white 
        hover:bg-green-200 hover:text-emerald-800 
        transition 
        text-xs sm:text-sm md:text-base
        whitespace-nowrap
      "
        >
          Source code
        </button>
      </Link>
    </div>
  </div>
);

const Projects = ({ text }, ref) => {
  const projects = [
    {
      imageSrc: "/WebPage.png",
      title: "E-Commerce Store",
      repoLink: "https://github.com/Crazydrooo/E-Commerce-Fashion-Store.git",
      altText: "WebPage",
    },
    {
      imageSrc: "/FoodApp.png",
      title: "Food App",
      repoLink: "https://github.com/Crazydrooo/Food-App.git",
      altText: "Food-app",
    },
    {
      imageSrc: "/map.png",
      title: "Country Details App",
      repoLink: "https://github.com/Crazydrooo/Country-Details.git",
      altText: "Country-Details",
    },
    {
      imageSrc: "/Quiz.png",
      title: "Quiz App",
      repoLink: "https://github.com/Crazydrooo/Quiz-app.git",
      altText: "Quiz",
    },
    {
      imageSrc: "/Myntra.png",
      title: "Myntra",
      repoLink: "https://github.com/Crazydrooo/Myntra-Project.git",
      altText: "myntra",
    },
    {
      imageSrc: "/shortLinks.png",
      title: "ShortLinks",
      repoLink: "https://github.com/Crazydrooo/ShortLinks.git",
      altText: "shortLinks",
    },
  ];

  return (
    <div
      className="px-auto pt-16 pb-24 bg-gradient-to-r from-white via-green-50 to-green-100"
      ref={ref}
    >
      <div className="pb-10">
        <h1 className="text-4xl text-center text-emerald-800">{text}</h1>
      </div>
      <div className="flex justify-center items-center text-center flex-wrap gap-2">
        {projects.map((project, index) => (
          <div key={index} className="w-[30%] min-w-[250px]">
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              repoLink={project.repoLink}
              altText={project.altText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(Projects);
