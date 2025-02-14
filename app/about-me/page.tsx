import TechSkillsScroller from "@/components/SkillsCard";
import React from "react";

function page() {
  return (
    <section>
      <div className="container text-white mx-auto pt-32 border-b pb-20 border-white/20">
        <h2 className="text-4xl font-bold mb-5">who am i</h2>
       <span className="space-y-5">
       <p className="">
          Hey! I'm Sohail, a front-end developer with a deep passion for
          blending programming and design—something I've been fascinated with
          since childhood. This passion led me to specialize in web development
          using JavaScript, React, and eventually Next.js. I chose Next.js
          primarily for its high performance and flexibility, allowing me to
          build fast and scalable websites.
        </p>
        <p>
          Throughout my journey, I've worked on corporate websites, dashboards,
          and e-commerce projects. What excites me the most is constantly
          learning new things—whether it's exploring new libraries or mastering
          new skills that enhance my work. Programming is full of challenges,
          but I always tackle them with a deep analytical approach, leveraging
          documentation, YouTube, and AI-powered tools to find the best
          solutions.
        </p>
        <p>
          Beyond web development, I'm highly interested in Artificial
          Intelligence, Machine Learning, and Image Processing. Currently, I'm
          exploring how to integrate these technologies with programming. My
          long-term goal is to deepen my knowledge in these fields and apply AI
          to gastrointestinal disease research.
          I'm always driven by creativity, and when an idea sparks in my mind, I
          don’t rest until I bring it to life. I thrive on deep thinking,
          problem-solving, and (somewhat 😄) precision in my work.
        </p>

       </span>
      </div>
      <div>
        <TechSkillsScroller/>
      </div>
    </section>
  );
}

export default page;
