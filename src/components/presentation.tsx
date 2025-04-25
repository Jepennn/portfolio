import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ArrowDown } from 'lucide-react';
import { Button } from "./ui/button";
import { TypingText } from "./typingText";
import { Navbar } from "./navbar";  



export function Presentation(){
    

    //This is the first viewPort of the page, it contains the navbar and the presentation section

    return (
        <div className="flex flex-col items-center h-screen">

            <Navbar/>
            <div className="flex flex-col items-center mt-20 grow">

                {/*Hi, I'm Jesper Hesselgren*/}
                <TypingText text="Hi, I'm Jesper Hesselgren" delay={0}/>

                {/* TODO: Add profile image*/}
                
                {/* <img src="/profile.jpeg" alt="profile-image" className="h-24 w-24 object-cover rounded-lg bg-primary-orange mx-2 border-6 border-primary-orange "/> */}


                {/*I'm a tech student at KTH section. */}
                <TypingText text="I'm a tech student at KTH" delay={2}/>

    
                {/*Socials button section*/}
                <div className="flex flex-row w-full justify-start gap-5 mt-2">
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
            className="flex flex-col items-center gap-2 cursor-pointer mb-15"
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


