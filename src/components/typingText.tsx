

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";


export function TypingText( {text, delay}: {text: string, delay: number}) {
    const baseText = text;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.slice(0, latest)
    );
  
    useEffect(() => {
      const controls = animate(count, baseText.length, {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: "easeInOut",
      });
      return controls.stop;
    }, []);
  
    return (
      <motion.h1
        className="cursor-bracket inline-block overflow-hidden whitespace-nowrap h-[1.1em] w-full"
      >
        <motion.span>{displayText}</motion.span>
      </motion.h1>
    );
}