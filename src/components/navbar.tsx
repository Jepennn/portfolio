import {delay, motion} from "motion/react";



export function Navbar(){



    return (
        <motion.nav className="flex justify-between items-center border-1 p-5 px-30 bg-primary-foreground rounded-4xl shadow-md sticky top-[50px] gap-10"
        initial={{ y: -150}}
        animate={{ y: [ -150, 20, -10, 0 ]}}
        transition={{
            duration:0.8, 
            delay: 3.1,
            ease: "easeOut",
            times: [0, 0.4, 0.7, 1],
        }}>

            <div className="flex-grow text-center"><span className="cursor-pointer border-b-2 px-3 py-1 ">About</span></div>
            <div className="flex-grow text-center"><span className="cursor-pointer border-b-2 px-3 py-1 ">Projects</span></div>
            <div className="flex-grow text-center"><span className="cursor-pointer border-b-2 px-3 py-1 ">Experience</span></div>
            <div className="flex-grow text-center"><span className="cursor-pointer border-b-2 px-3 py-1 ">Contact</span></div>
        </motion.nav>
    )
} 