"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#121624] via-80% to-[#0b0d12] min-h-screen">
        <div className="py-12 md:py-20 w-full mx-auto container px-4 md:px-8">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-5xl text-white font-black">
              Let's Build <span className="bg-[#1e1b35] px-3 rounded-xl text-[#dab2ff]">Together</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Hey there! 👋 I'm excited to show you how we can turn your ideas into reality. 
              Here's my friendly approach to making magic happen in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card
              title="Discovery &<br /> Planning"
              description="Let's start with a friendly chat about your vision! We'll map out the journey together and create a plan that fits your needs perfectly."
              icon={<HoverBorderGradient
                          containerClassName="rounded-full cursor-pointer -mb-6 sm:-mb-8 md:-mb-12"
                          as="button"
                          className="dark:bg-[#1e1b35] py-2 sm:py-2.5 md:py-3 px-4 sm:px-4.5 md:px-5 bg-white text-black  dark:text-[#dab2ff] flex items-center space-x-2"
                        >
                          <motion.span
                            className="text-base sm:text-lg md:text-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Download CV
                          </motion.span>
                        </HoverBorderGradient>}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
            
            <Card
              title="Design &<br /> Prototyping"
              description="Watch your ideas come to life! We'll create interactive prototypes and beautiful designs that capture your vision perfectly."
              icon={<HoverBorderGradient
                containerClassName="rounded-full cursor-pointer -mb-6 sm:-mb-8 md:-mb-12"
                as="button"
                className="dark:bg-[#1e1b35] py-2 sm:py-2.5 md:py-3 px-4 sm:px-4.5 md:px-5 bg-white text-black  dark:text-[#dab2ff] flex items-center space-x-2"
              >
                <motion.span
                  className="text-base sm:text-lg md:text-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.span>
              </HoverBorderGradient>}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
            
            <Card
              title="Development &<br /> Progress"
              description="See your project grow day by day! I'll keep you in the loop with regular updates and milestones as we bring your vision to reality."
              icon={<HoverBorderGradient
                containerClassName="rounded-full cursor-pointer -mb-6 sm:-mb-8 md:-mb-12"
                as="button"
                className="dark:bg-[#1e1b35] py-2 sm:py-2.5 md:py-3 px-4 sm:px-4.5 md:px-5 bg-white text-black dark:text-[#dab2ff] flex items-center space-x-2"
              >
                <motion.span
                  className="text-base sm:text-lg md:text-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.span>
              </HoverBorderGradient>}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
            
            <Card
              title="Launch &<br /> Beyond"
              description="Time to celebrate! We'll ensure a smooth launch and stick around to help you grow and evolve your project further."
              icon={<HoverBorderGradient
                containerClassName="rounded-full cursor-pointer -mb-6 sm:-mb-8 md:-mb-12"
                as="button"
                className="dark:bg-[#1e1b35] py-2 sm:py-2.5 md:py-3 px-4 sm:px-4.5 md:px-5 bg-white text-black  dark:text-[#dab2ff] flex items-center space-x-2"
              >
                <motion.span
                  className="text-base sm:text-lg md:text-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.span>
              </HoverBorderGradient>}
            >
              <CanvasRevealEffect
                animationSpeed={4}
                containerClassName="bg-purple-900"
                colors={[[167, 139, 250]]}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-[24rem] md:h-[28rem] transition-all duration-300 hover:scale-[1.02]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3  dark:text-[#dab2ff] text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3  dark:text-[#dab2ff] text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3  dark:text-[#dab2ff] text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3  dark:text-[#dab2ff] text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex flex-col justify-center items-center z-20 text-center p-4">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-[#dab2ff] text-lg md:text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <p className="dark:text-[#dab2ff] max-w-[80%] md:max-w-[70%] text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 md:h-10 md:w-10 text-black  dark:text-[#dab2ff] group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};