"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Spotlight } from "./ui/spotlight-new";

function Hero() {
  // Remove the 'as const' to make it a regular string array
  const words = ["Next.js", "Creative", "Aspiring ML & DL Enthusiast"];
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [showDeveloper, setShowDeveloper] = useState(true);

  useEffect(() => {
    if (currentWord === "Aspiring ML & DL Enthusiast") {
      setShowDeveloper(false);
    } else {
      const timer = setTimeout(() => {
        setShowDeveloper(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentWord]);

  const handleWordChange = (word: string): void => {
    if (word === "Aspiring ML & DL Enthusiast") {
      setShowDeveloper(false);
      setTimeout(() => {
        setCurrentWord(word);
      }, 300);
    } else {
      setCurrentWord(word);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-[100svh] overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="-z-10 absolute inset-0 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y="-1"
            id="a"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-white/5">
          <path d="M-200 0H1v201h-201zm800 0h201v201H600zM-400 600h201v201h-201zm600 200h201v201H200z"></path>
        </svg>
        <rect fill="url(#a)" width="100%" height="100%"></rect>
      </svg>
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#090911] via-[#090911] to-[#090911]"></div>

      <div
        aria-hidden="true"
        className="-z-10 absolute top-10 left-[calc(50%-4rem)] transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#7cc8ff] to-[#181130] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>
      <Spotlight />
      <motion.div
        className="absolute flex flex-col justify-center items-center w-full h-full px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-8">
          <HoverBorderGradient
            containerClassName="rounded-full cursor-pointer -mb-6 sm:-mb-8 md:-mb-12"
            as="button"
            className="dark:bg-black py-2 sm:py-2.5 md:py-3 px-4 sm:px-4.5 md:px-5 bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <motion.span
              className="text-base sm:text-lg md:text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.span>
          </HoverBorderGradient>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[8rem] xl:text-[11rem] font-bold text-white text-center"
        >
          Soheil Feizi
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="-mt-2 sm:-mt-4 md:-mt-6 lg:-mt-12 xl:-mt-16 text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[7rem] text-center font-bold text-white flex flex-wrap justify-center items-center"
        >
          <FlipWords
            words={words}
            onWordChange={handleWordChange}
            duration={5000}
          />
          <AnimatePresence mode="wait">
            {showDeveloper && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[6rem] text-[#dab2ff]"
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                Developer
              </motion.span>
            )}
          </AnimatePresence>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-white/50 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
        >
          Passionate developer with experience in building high-quality web
          applications using Next.js. Always eager to learn and explore new
          technologies.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Hero;