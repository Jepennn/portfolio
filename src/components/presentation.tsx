import { motion } from "motion/react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export function Presentation(){
    return (
        <div className="flex flex-col items-center my-16 ">
            <div>

                {/*Hi, I'm Jesper Hesselgren + Image section*/}
                <motion.div  
                    className="flex flex-row mb-2 items-center"
                    initial={{ y: -150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.0}} >
                    <motion.h1 
                    className="cursor-bracket"
                    >Hi, I'm Jesper</motion.h1>
                    <motion.div
                        className="h-18 w-18 rounded-lg bg-orange-500 mx-2"
                    >
                        {/* Here will a image of me was */}
                    </motion.div>
                    <motion.h1 
                    className="cursor-bracket"
                    >Hesselgren</motion.h1>
                </motion.div>

                {/*I'm a tech student at KTH section. */}
                <motion.h1 
                className="whitespace-nowrap overflow-hidden cursor-bracket mb-4"
                initial={{ width: 0 }} 
                animate={{ width: "auto" }} 
                transition={{ duration: 2.0, delay: 1.0 }}>
                I'm a tech student at KTH.
                </motion.h1>

            
                {/*Socials button section*/}
                <div className="flex flex-row items-center gap-5 mb-3">
                    <motion.button
                        className="cursor-pointer"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.4 },
                        }}
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1.0,
                            transition: { duration: 0.8, delay: 2.7 },
                        }}
                    >
                        <FaGithub size={43}/>
                    </motion.button>
                    <motion.button
                        className="cursor-pointer"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.4 },
                        }}
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1.0,
                            transition: { duration: 0.8, delay: 2.7 },
                        }}
                    >
                        <FaLinkedin size={43}/>
                    </motion.button>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.4 },
                        }}
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1.0,
                            transition: { duration: 0.8, delay: 2.7 },
                        }}
                    >
                    <Button variant={"outline"} className="p-5"> 
                        <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                        </span>
                        Open to work
                    </Button>
                    </motion.button>
                </div>
            </div>  
        </div>
    );
}