"use client";
import React, { useEffect, useState } from "react";
import { TracingBeam } from "./tracing-beam";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  date: string;
  description: React.ReactNode;
  badge: string[];
}

interface ExperienceCardProps {
  item: ExperienceItem;
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export function Experience() {
  const isLargerThanMd = useMediaQuery("(min-width: 768px)");

  const Content = () => (
    <div className="space-y-6">
      {dummyContent.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-[#121624] to-[#0b0d12] px-4 sm:px-8 lg:pt-20 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12">
          Dive into my journey—explore the diverse projects and roles that have shaped my career.
        </p>
        {isLargerThanMd ? (
          <TracingBeam>
            <Content />
          </TracingBeam>
        ) : (
          <Content />
        )}
      </div>
    </div>
  );
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12 },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12 },
    },
  };

  return (
    <div className="relative border border-gray-700 rounded-xl p-6 transition-colors duration-300 hover:bg-gray-800/30">
      <div className="absolute -left-3 top-0 h-full w-1 bg-purple-500 rounded-full" />

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white mb-2"
      >
        {item.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-purple-400 mb-4 font-medium"
      >
        {item.date}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 text-gray-300 leading-relaxed"
      >
        {item.description}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap gap-2"
      >
        {item.badge.map((badgeItem, badgeIndex) => (
          <motion.span
            key={badgeIndex}
            variants={badgeVariants}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-[#121623] border border-purple-500/20 text-purple-300"
          >
            {badgeItem}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const dummyContent: ExperienceItem[] = [
  {
    title: "Python Mentor & Educator",
    date: "Jun 2024-Present",
    description: (
      <p className="text-gray-300">
        As a Python educator at an academy, I've taught over 100 students using creative and clear teaching methods that simplify intricate concepts.
      </p>
    ),
    badge: [
      "Python",
      "Numpy",
      "Pandas",
      "MySql",
      "SqlLite3",
      "Scikit-Learn",
      "Tkinter",
      "OOP",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "JavaScript Mentor",
    date: "Aug 2024-Present",
    description: (
      <p className="text-gray-300">
        Alongside Python, I’ve led engaging JavaScript sessions where students develop creative projects that boost problem-solving and innovative thinking.
      </p>
    ),
    badge: [
      "JavaScript",
      "Todo App",
      "Quiz App",
      "Shopping Cart",
      "Register Form",
      "Animation",
      "Firebase API",
    ],
  },
  {
    title: "React.js Developer at iPara Company",
    date: "Jan 2024-Dec 2024",
    description: (
      <p className="text-gray-300">
        At iPara Company, I crafted multiple React projects, ensuring high customer satisfaction by delivering efficient, scalable, and user-friendly solutions.
      </p>
    ),
    badge: [
      "JavaScript",
      "React.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
    ],
  },
];

export default Experience;
