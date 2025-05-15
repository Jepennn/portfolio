import { motion, useScroll } from "motion/react";


export function ProgressBar({children}: {children: React.ReactNode}){


    const { scrollYProgress } = useScroll();


    return(
        <>
            <motion.div
            initial={{ width: 0, originX: 1}}
            animate={{ width: "100%", originX: 0}}
            style={{ scaleX: scrollYProgress }} 
            className="h-4 bg-primary-orange fixed top-0 left-0"
            />
        {children}
        </>
    )
}