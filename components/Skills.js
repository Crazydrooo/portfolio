import React, { forwardRef } from "react";
import { FaHtml5, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";

const skillData = [
  {
    icon: <GrReactjs className="text-9xl mb-2 transition text-[#00d8ff]" />,
    label: "React JS",
    color: "text-[#00d8ff]",
  },
  {
    icon: <SiNextdotjs className="text-9xl mb-2 transition text-[#0c0c0c]" />,
    label: "Next JS",
    color: "text-[#0c0c0c]",
  },
  {
    icon: <TbBrandRedux className="text-9xl mb-2 transition text-[#764abc]" />,
    label: "Redux",
    color: "text-[#764abc]",
  },
  {
    icon: (
      <IoLogoJavascript className="text-9xl mb-2 transition text-[#ffe435]" />
    ),
    label: "JavaScript",
    color: "text-[#ffe435]",
  },
  {
    icon: <FaPython className="text-9xl mb-2 transition text-[#3776AB]" />,
    label: "Python",
    color: "text-[#3776AB]",
  },
  {
    icon: <FaBootstrap className="text-9xl mb-2 transition text-[#563d7c]" />,
    label: "Bootstrap",
    color: "text-[#563d7c]",
  },
  {
    icon: (
      <RiTailwindCssFill className="text-9xl mb-2 transition text-[#38bdf8]" />
    ),
    label: "Tailwind CSS",
    color: "text-[#38bdf8]",
  },
  {
    icon: (
      <IoLogoFirebase className="text-9xl mb-2 transition text-[#FFCA28]" />
    ),
    label: "Firebase",
    color: "text-[#FFCA28]",
  },

  {
    icon: <SiMysql className="text-9xl mb-2 transition text-[#4479A1]" />,
    label: "MySQL",
    color: "text-[#4479A1]",
  },
  {
    icon: <FaGitAlt className="text-9xl mb-2 transition text-[#f34f29]" />,
    label: "Git",
    color: "text-[#f34f29]",
  },
  {
    icon: <FaGithub className="text-9xl mb-2 transition text-[#0c0c0c]" />,
    label: "GitHub",
    color: "text-[#0c0c0c]",
  },
  {
    icon: <FaHtml5 className="text-9xl mb-2 transition text-[#e34f26]" />,
    label: "HTML5",
    color: "text-[#e34f26]",
  },
  {
    icon: <IoLogoCss3 className="text-9xl mb-2 transition text-[#264de4]" />,
    label: "CSS3",
    color: "text-[#264de4]",
  },
];

const Projects = ({ text }, ref) => {
  return (
    <div
      className="px-auto pt-24 flex justify-center flex-col items-center text-center bg-gradient-to-l from-green-100 via-green-50 to-white"
      ref={ref}
    >
      <div className="mb-6">
        <h1 className="text-4xl text-emerald-800">{text}</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="rounded-xl p-6 cursor-pointer transition-transform hover:scale-125 group"
          >
            <div className={`transition ${skill.color}`}>{skill.icon}</div>
            <span
              className={`transition text-lg font-semibold group-hover:${skill.color}`}
            >
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(Projects);
