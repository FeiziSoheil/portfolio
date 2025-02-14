
import styles from "./page.module.css";
import { ProjectParallaxDemo } from "@/components/ProjectParallaxDemo";
import Hero from "@/components/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import NavBar from "@/components/NavBar";
import Experience from "@/components/ui/Experiance";
import Grid from "@/components/Grid";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import Projects from "@/components/Projects";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";







export default function Home() {
  return (
    <section>
    
      <Hero/>
    <Grid/>
    <ProjectParallaxDemo/>
   <Projects/>
    <Experience/>
      <Feedback/>
    
    </section>
  );
}
