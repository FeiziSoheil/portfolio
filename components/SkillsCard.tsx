'use client'
import Head from 'next/head';
import React from 'react';
import { DiMysql } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiMongodb,
  SiGraphql,
  SiMui,
  SiScikitlearn,
  SiTypescript,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';

interface TechSkill {
  name: string;
  Icon: React.ElementType;
}

const techSkills: TechSkill[] = [
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'CSS', Icon: SiCss3 },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Typescript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'Scikit-learn', Icon: SiScikitlearn },
  { name: 'Pandas', Icon: SiPandas },
  { name: 'Numpy', Icon: SiNumpy },
  { name: 'Mysql', Icon: DiMysql  },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Mui', Icon: SiMui },
  { name: 'Tailwind Css', Icon: RiTailwindCssFill  },
  { name: 'Bootstrap', Icon: FaBootstrap  },
];

const TechSkillsScroller: React.FC = () => {
  return (
    <>
      <Head>
        <title>Infinite Tech Skills Cards</title>
        <meta
          name="description"
          content="Infinite moving cards showcasing tech icons with hover effects using Tailwind CSS and React Icons"
        />
      </Head>
      <div className="py-14 lg:pb-44">
        {/* Title and Description */}
        <div className="container mx-auto  text-white py-10">
        <h2 className="text-4xl font-bold">
  Exploring Web & AI Frontiers
</h2>
<p className="mt-4 text-xl">
  Dive into a seamless showcase of modern web technologies, AI-driven solutions, and cutting-edge tools shaping the future of development.
</p>

        </div>

        {/* Scroller */}
        <div className="relative overflow-hidden w-full">
          {/* Left shadow overlay */}
          <div className="absolute top-0 left-0 h-full w-52 pointer-events-none z-10 bg-gradient-to-r from-[#0b0d12] via-[#0b0d12ce] to-transparent"></div>
          {/* Right shadow overlay */}
          <div className="absolute top-0 right-0 h-full w-52 pointer-events-none z-10 bg-gradient-to-l from-[#0b0d12] via-[#0b0d12ce] to-transparent"></div>
          <div className="inline-flex animate-scroll relative z-0">
            {techSkills.concat(techSkills).map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="relative group bg-transparent border-2 hover:border-[#27224b]  rounded-lg p-5 mx-3 w-[150px] h-[150px] flex items-center border-white/20 justify-center transform transition-transform duration-300 group-hover:scale-105"
               
              >
                <tech.Icon className="text-[#27224b]" size={60} />
                <div className="absolute inset-0 rounded-lg bg-[#27224b]  bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white uppercase tracking-wide text-sm">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default TechSkillsScroller;
