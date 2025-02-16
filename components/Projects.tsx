"use client"
import React, { useMemo } from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { LuExternalLink } from 'react-icons/lu'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaJsSquare, FaReact } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { IoLogoFirebase } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Technology {
  id: number;
  name: string;
  icon: JSX.Element;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  previewLink: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const tech: Technology[] = [
  {
    id: 1,
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-full h-full text-sky-400" />
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs className="w-full h-full text-white" />
  },
  {
    id: 3,
    name: "Firebase",
    icon: <IoLogoFirebase className="w-full h-full text-orange-400" />
  },
  {
    id: 4,
    name: "React.js",
    icon: <FaReact className="w-full h-full text-blue-400" />
  },
  {
    id: 5,
    name: "JavaScript",
    icon: <FaJsSquare className="w-full h-full text-yellow-400" />
  },
  {
    id: 6,
    name: "TypeScript",
    icon: <BiLogoTypescript className="w-full h-full text-blue-600" />
  }
];

const ProjectCard = React.memo<ProjectCardProps>(({ project, className = '' }) => (
  <div className={`group relative h-full min-h-[250px] md:min-h-[280px] transform perspective-1000 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
    
    <div className="relative h-full rounded-xl md:rounded-2xl border border-white/20 overflow-hidden transition-all duration-700 ease-in-out transform group-hover:border-white/40 ">
      <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
        <Image
          src='/image/bg.png'
          alt='Background image'
          height="600"
          width="600"
          className="object-cover object-left-top h-full w-full transition-all duration-700 ease-in-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-700 ease-in-out group-hover:backdrop-blur-[1px] group-hover:bg-black/30" />
      </div>

      <div className="relative h-full p-4 md:p-6 flex flex-col bg-gradient-to-t from-[#121624] via-[#0c0e16] to-transparent">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transform transition-all duration-700 ease-in-out group-hover:text-[#dab2ff] group-hover:translate-y-[-2px]">
            {project.title}
          </h3>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed transform transition-all duration-700 ease-in-out group-hover:text-white/90">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex 5xl:flex-wrap 6xl:flex-nowrap flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 w-full">
          <div className="transform transition-all duration-700 ease-in-out group-hover:translate-y-[-2px]">
            <span className="text-xs text-white/60 mb-2 md:mb-4 block">Built with:</span>
            <div className="flex items-center -space-x-4">
              <AnimatedTooltip items={project.technologies} />
            </div>
          </div>
          
          <Link 
            href={project.previewLink} 
            className="relative text-white/50 5xl:mt-5  5xl:mx-auto 6xl:mt-0 6xl:w-auto 6xl:mx-0  flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg overflow-hidden group/link w-full sm:w-auto justify-center sm:justify-start"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/link:opacity-100 transition-all duration-700 ease-in-out rounded-lg" />
            <span className="relative z-10 transform transition-all duration-700 ease-in-out group-hover/link:text-white/90 text-sm md:text-base">Preview</span>
            <LuExternalLink className="relative z-10 transform transition-all duration-700 ease-in-out group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

function Projects() {
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Admin Panel",
      description: "A comprehensive admin dashboard with user management, analytics, and reporting features.",
      technologies: tech.slice(0, 4),
      previewLink: "https://feizisoheil.github.io/admin-panel/"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with cart management, payment integration, and order tracking functionality.",
      technologies: tech.slice(1, 5),
      previewLink: "#"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and multi-language support using Python backend.",
      technologies: [tech[2], tech[3], tech[4], tech[5]],
      previewLink: "#"
    }
  ], []);

  return (
    <section className="bg-gradient-to-b from-[#0b0d12] to-[#121624] 2xs:pb-44 w-full py-16 md:py-20 lg:py-28">
      <div className="sm:container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-black">
            Last <span className="bg-[#1e1b35] px-2 md:px-3 rounded-lg md:rounded-xl text-[#dab2ff]">Works</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/70 max-w-2xl mx-auto px-4">
            Every project has a story! Here, you can check out my latest work and see how I've turned ideas into real products. From minimalist designs to dynamic applications—it's all here. 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 2xs:gap-y-8 lg:grid-cols-3 gap-4 md:gap-6 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 ease-in-out rounded-lg md:rounded-xl bg-[#1e1b35] text-[#dab2ff] hover:bg-[#2a2649] transition-all duration-700 group text-sm md:text-base"
          >
            View All Projects
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-all duration-700 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Projects);