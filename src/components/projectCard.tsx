import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { TooltipCard } from "./tooltipCard"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    id: number;
    description: string;
    typeOfProject: string;
    image: string;
    dev?: boolean;
    demoUrl?: string;
    techStack: string[];
    githubUrl?: string;
}


   

export function ProjectCard({
    title,
    id, //Used to decide from which side the project card should fade in from
    description,
    typeOfProject,
    image,
    dev,
    techStack,
    demoUrl, 
    githubUrl,
}: ProjectCardProps){
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: id % 2 === 0 ? -600 : 600}}
        whileInView={{
            scale: 1,
            opacity: 1,
            x: 0,
            transition: { duration: 0.70, delay: 0.03},
        }}
        viewport={{once: true, amount: 0.5}}
        className="border-2 flex justify-between gap-4 rounded-4xl shadow-md py-5 px-8 my-8">

            {/* Project description */}
            <div className="flex flex-col w-2/3">
                <div className="flex gap-3">
                    <h3>{title}</h3>
                    {githubUrl && <TooltipCard content="Github" link={githubUrl}><FaGithub size={20}/></TooltipCard>}
                    {demoUrl && <TooltipCard content="Live demo" link={demoUrl}><FaExternalLinkAlt size={17}/></TooltipCard>}
                </div>
                    <h5 className="mb-2">{typeOfProject}</h5>
                    <p className="mb-6">{description}</p>
                <div className="flex gap-2">
                    {techStack.map((tech) => (
                        <Badge key={tech} className="bg-secondary-gray text-gray-800 shadow-md hover:scale-110 transition-all">{tech}</Badge>
                    ))}
                </div>
            </div>

            {/* Project image */}
            <img src={image} alt="project-logo" className="w-72 h-52 object-fill rounded-4xl border-2" />

        </motion.div>
    )
}


