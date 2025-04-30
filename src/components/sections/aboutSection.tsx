
import { AboutContent } from "@/components/aboutContent";

import { motion } from "motion/react";

export function AboutSection() {
  return (
    <motion.div
    id="about"
    className="max-h-screen mb-40"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    transition={{ duration: 0.8}}
    viewport={{ amount:0.3, once: true }}
    >

      <h1 className="">About Me</h1>
      {/*Implement a mini navbar so to say*/}
      <AboutContent/>

  
    </motion.div>
  );
}
