import {delay, motion} from "motion/react";



export function Navbar(){



    return (
        <motion.nav className="flex justify-between items-center w-full border-1 p-5 bg-primary-foreground rounded-4xl shadow-md mt-12"
        initial={{ y: -150}}
        animate={{ y: [ -150, 20, -10, 10, 0 ]}}
        transition={{
            duration:0.8, 
            delay: 3.1,
            ease: "easeOut",
            times: [0, 0.4, 0.6, 0.8, 1],
        }}>

            <div className="flex-grow text-center"><span className="cursor-pointer px-5 py-5 rounded-4xl hover:bg-secondary-gray"><a href="#about">About</a></span></div>
            <div className="flex-grow text-center"><span className="cursor-pointer px-5 py-5 rounded-4xl hover:bg-secondary-gray"><a href="#projects">Projects</a></span></div>
            <div className="flex-grow text-center"><span className="cursor-pointer px-5 py-5 rounded-4xl hover:bg-secondary-gray"><a href="#experience">Experience</a></span></div>
            <div className="flex-grow text-center"><span className="cursor-pointer px-5 py-5 rounded-4xl hover:bg-secondary-gray"><a href="#contact">Contact</a></span></div>
        </motion.nav>
    )
} 