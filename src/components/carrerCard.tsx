import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge"


interface CarrerCardProps {
    company: string;
    position: string;
    description: string;
    date: string;
    svg: string;
    
}

export function CarrerCard({ company, position, description, date, svg }: CarrerCardProps){



    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.95}}
        animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.25, delay: 0.03},
        }}
        className="border-2 flex flex-col justify-between rounded-4xl shadow-md py-5 px-8">
            <div className="">
                <div className="flex gap-4">
                    <img src={svg} alt="nordnet-logo" className="w-12 h-12 border-2 rounded-full" /> 
                    <div className="mb-3">
                        <h3>{company}</h3>
                        <h5 >{position}</h5>
                    </div>
                </div>
                <p className="mb-6">{description}</p>
            </div>
            <Badge variant="outline" className="bg-secondary-gray shadow-md border-2">{date}</Badge> 
        </motion.div>
    )
}