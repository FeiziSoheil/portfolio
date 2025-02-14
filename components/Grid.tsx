import React from "react";
import dynamic from "next/dynamic";

const CobeGlobe = dynamic(() => import("../components/CobeGlobe"), {
  ssr: false,
});

function Grid() {
  return (
    <section className="bg-gradient-to-b from-[#0b0d12] via-[#0b0d12] to-[#0b0d12] pt-20 sm:pt-32 md:py-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-3 sm:gap-5">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl animate-fade-in">
          Overview
        </h2>

        <div className="flex gap-3 sm:gap-5 flex-col lg:flex-row">
          {/* big image - Smooth fade in and subtle hover effect */}
          <div className="border relative h-[300px] sm:h-[400px] md:h-[52vh] w-full lg:w-[70%] overflow-hidden border-white/10 rounded-xl sm:rounded-3xl transition-all duration-500 hover:border-white/30 group animate-slide-up">
            <img
              src="/b1.svg"
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt=""
            />
            <h3 className="text-white z-10 absolute bottom-4 left-4 text-sm sm:text-base md:text-lg transition-all duration-300 group-hover:translate-x-2">
              I prioritize client collaboration, fostering open communication
            </h3>
          </div>

          {/* card wrapper */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-5 lg:w-[40%]">
            {/* Globe card - Floating animation */}
            <div className="border relative overflow-hidden w-full sm:w-1/2 lg:w-full h-[250px] sm:h-[200px] md:h-[25vh] p-3 sm:p-5 border-white/10 rounded-xl sm:rounded-3xl transition-all duration-500 hover:border-white/30 group animate-float">
              <h2 className="font-bold text-xl sm:text-2xl text-white mt-3 sm:mt-5 w-[80%] transition-all duration-300 group-hover:translate-x-2">
                i'm available around the world and do projects
              </h2>
              <CobeGlobe
                width={1000}
                height={1000}
                markers={[
                  { location: [35.6892, 51.389], size: 0.05 },
                  { location: [52.52, 13.405], size: 0.05 },
                ]}
                baseColor={[0.3, 0.3, 0.9]}
                glowColor={[0.1, 0.1, 0.4]}
                markerColor={[0.9, 0.3, 0.3]}
                rotationSpeed={0.009}
                mapBrightness={6}
              />
            </div>

            {/* Tech stack card - Gradient border animation */}
            <div className="border relative h-[250px] sm:h-[200px] md:h-[25vh] w-full sm:w-1/2 lg:w-full overflow-hidden border-white/10 rounded-xl sm:rounded-3xl group hover:border-white/20 transition-all duration-500">
              <div className="2xs:p-8  ml-3 sm:ml-5 h-full transform transition-all duration-300 group-hover:translate-x-2 *:">
                <p className="text-white/30  2xs:text-base md:text-xl ">
                  I constantly try to improve
                </p>
                <h2 className="text-white 2xs:text-3xl xs:text-xl md:text-3xl">
                  My tech stack
                </h2>
              </div>

              <div className="absolute 2xs:bottom-14 2xs:space-x-3">
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in ">
                  React.js
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"></span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  Tailwind
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"></span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  Next.js
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  Python
                </span>
              </div>

              <div className="absolute 2xs:bottom-0 2xs:space-x-3">
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  React.js
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  Tailwind
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"></span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  Next.js
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  Python
                </span>
                <span className="2xs:px-4 2xs:py-3 2xs:text-lg bg-[#141423] text-white/50 rounded-lg  hover:bg-[#161629] hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 sm:gap-5 flex-col lg:flex-row">
          {/* teacher wrapper */}
          <div className="flex flex-col gap-3 sm:gap-5 lg:w-[40%]">
            {/* First teacher card - Pulse animation */}
            <div className="border relative h-[200px] sm:h-[20vh] overflow-hidden border-white/10 rounded-xl sm:rounded-3xl group transition-all duration-500 hover:border-white/30 animate-slide-right">
              <div className="absolute right-0 h-full -bottom-10 opacity-80 transition-all duration-700 group-hover:scale-110">
                <img
                  src="/grid.svg"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[55%] transition-transform duration-700 group-hover:translate-x-2">
                <img
                  src="/b4.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center h-full flex-col ml-4 sm:ml-8 max-w-[40%]">
                <p className="text-white/30 text-xs sm:text-sm group-hover:text-white/50 transition-all duration-300">
                  member of course
                </p>
                <h2 className="text-white max-w-full 2xs:text-xl xs:text-xl md:text-2xl group-hover:translate-x-2 transition-all duration-300">
                  teach more than <strong>342</strong> students
                </h2>
              </div>
            </div>

            {/* Project success card - Glowing animation */}
            <div className="border relative h-[200px] sm:h-[20vh] overflow-hidden border-white/10 rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#1a1b2e] to-[#0d0d1a] group transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.1)] animate-slide-up">
              <div className="absolute top-4 right-4 flex space-x-2">
                {["bg-green-500", "bg-blue-500", "bg-purple-500"].map(
                  (color, index) => (
                    <div
                      key={color}
                      className={`w-3 h-3 rounded-full ${color} animate-pulse`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    ></div>
                  )
                )}
              </div>
              <div className="flex justify-center h-full flex-col ml-4 sm:ml-8 transition-all duration-300 group-hover:translate-x-2">
                <p className="text-white/30 text-xs sm:text-sm group-hover:text-white/50 transition-all duration-300">
                  Project Completion Rate
                </p>
                <h2 className="text-white 2xs:text-xl xs:text-xl md:text-2xl mt-2">
                  <strong className="group-hover:text-purple-400 transition-all duration-300">
                    97%
                  </strong>{" "}
                  Success Rate
                </h2>
                <p className="text-white/50 text-sm mt-2 transition-all duration-300 group-hover:text-white/70">
                  Delivered 50+ projects on time
                </p>
              </div>
            </div>
          </div>

          {/* Current project card - Scale animation */}
          <div className="border relative lg:w-[65%] h-[300px] sm:h-[350px] md:h-[42vh] overflow-hidden border-white/10 rounded-xl sm:rounded-3xl group transition-all duration-500 hover:border-white/30 animate-fade-in">
            <div className="absolute right-0 h-full -bottom-10 opacity-80 transition-all duration-700 group-hover:scale-110">
              <img
                src="/grid.svg"
                className="w-full h-full object-cover object-center"
                alt=""
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[55%] transition-transform duration-700 group-hover:translate-x-4">
              <img
                src="/b5.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex 2xs:max-w-[80%] justify-center h-full flex-col ml-4 sm:ml-8 max-w-[40%]">
              <p className="text-white/30 text-xs sm:text-sm group-hover:text-white/50 transition-all duration-300">
                The Inside Scoop
              </p>
              <h2 className="text-white 2xs:text-xl xs:text-xl md:text-2xl group-hover:translate-x-2 transition-all duration-300">
                Currently building a JS Animation library
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add these keyframes and utilities to your global CSS or Tailwind config
const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-left {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-right {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
  @keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}


.animate-slide-up {
  animation: slide-up 0.5s ease-out forwards;
}

.animate-slide-left {
  animation: slide-left 0.5s ease-out forwards;
}

.animate-slide-right {
  animation: slide-right 0.5s ease-out forwards;
}
`;

export default Grid;
