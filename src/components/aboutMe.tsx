
import { NavbarAbout } from "@/components/navbarAbout";
import { motion } from "motion/react";

export function AboutMe() {
  return (
    <motion.div
    className="h-screen"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    transition={{ duration: 0.8}}
    viewport={{ amount:0.3, once: true }}
    >
      <h1 className="">About Me</h1>
      {/*Implement a mini navbar so to say*/}
      <NavbarAbout/>

  
    </motion.div>
  );
}
