import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ArrowDown } from 'lucide-react';
import { Button } from "./ui/button";
import { useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";



export function Presentation(){
    


    return (
        <div className="flex flex-col gap-45 items-center h-screen pt-40">
            <div className="flex flex-col items-center">

                {/*Hi, I'm Jesper Hesselgren*/}
                <TypingText text="Hi, I'm Jesper Hesselgren" delay={0}/>

                {/* TODO: Add profile image*/}
                
                {/* <img src="/profile.jpeg" alt="profile-image" className="h-24 w-24 object-cover rounded-lg bg-primary-orange mx-2 border-6 border-primary-orange "/> */}


                {/*I'm a tech student at KTH section. */}
                <TypingText text="I'm a tech student at KTH" delay={2}/>

    
                {/*Socials button section*/}
                <div className="flex flex-row w-full justify-start gap-5 mb-3">
                    <motion.button
                        className="animation-button"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1.0,
                            transition: { duration: 0.8, delay: 3.1 },
                        }}
                    >
                        <FaGithub size={43}/>
                    </motion.button>
                    <motion.button
                        className="animation-button"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1.0,
                            transition: { duration: 0.8, delay: 3.1 },
                        }}
                    >
                        <FaLinkedin size={43}/>
                    </motion.button>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1.0,
                            transition: { duration: 0.8, delay: 3.1 },
                        }}
                    >
                        {/*TODO: ADD OPEN TO WORK BUTTON */}
                    <Button variant={"outline"} className="p-5 bg-primary-foreground"> 
                        <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                        </span>
                        Open to work
                    </Button>
                    </motion.div>
                </div>
            </div> 
            <motion.div 
            className="flex flex-col items-center gap-2 cursor-pointer"
            initial={{ scale: 0 }}
            animate={{
                scale: 1.0,
                transition: { duration: 0.8, delay: 3.1 },
            }}
            >
                <span>Read more</span> <ArrowDown size={32} className="animate-bounce"/>
            </motion.div>
        </div>
    );
}


export default function TypingText( {text, delay}: {text: string, delay: number}) {
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