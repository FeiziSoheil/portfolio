"use client";
import React from "react";
import { TracingBeam } from "./tracing-beam";
import { motion } from "framer-motion";

// تعریف اینترفیس برای آیتم‌های تجربه
interface ExperienceItem {
  title: string;
  date: string;
  description: React.ReactNode;
  badge: string[];
}

// تعریف اینترفیس برای پراپس کامپوننت کارت تجربه
interface ExperienceCardProps {
  item: ExperienceItem;
}

export function Experience() {
  return (
    <div className="bg-gradient-to-b from-[#121624] via-25% to-[#0b0d12] px-4 sm:p-12 lg:pt-20 lg:px-8">
      <TracingBeam>
        <h2 className="text-4xl font-bold xs:ml-12 md:ml-auto mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h2>
        <div className="space-y-8">
          {dummyContent.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </TracingBeam>
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
      transition: {
        type: "spring",
        damping: 12,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <div className="relative border border-gray-700 rounded-xl p-6 transition-colors duration-300 hover:bg-gray-800/30">
      <div className="absolute -left-3 h-full top-0 w-1 bg-gradient-to-b from-purple-500 to-[#121623] rounded-full" />

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
        As a Python educator at an academy, I have taught more than 100 students.
        Through the use of varied and imaginative teaching techniques, I have
        successfully simplified intricate Python ideas for students below the age
        of 15. This method has allowed my students to swiftly grasp programming
        skills and implement them effectively.
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
        In addition to teaching Python, I have also instructed JavaScript. By
        implementing numerous creative projects, students have been able to
        complete their assigned tasks with creativity and skill. This educational
        approach has not only enhanced their programming skills but has also
        significantly improved their problem-solving abilities and creativity.
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
        As a React developer at iPara Company, I have successfully completed numerous
        projects in various fields. These efforts have led to high customer satisfaction.
        By leveraging my specialized skills and creativity, I have been able to provide
        efficient and effective solutions, completing projects in the best possible way.
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
