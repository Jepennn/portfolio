import { motion } from "motion/react";
import { ProjectCard } from "../projectCard";

export function ProjectSection(){


    const projects = [
        {
            title: "Portfolio",
            id: 1,
            description: "This is my portfolio website built to showcase my skills and projects.",
            typeOfProject: "Personal Project",
            image: "/project1.png",
            dev: false,
            techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
            githubUrl: "https://github.com/Jepennn",
            demoUrl: "https://project1.com",
        },
        {
            title: "KTH AI society",
            id: 2,
            description: "KTH AI society is a student organization, I'm apart of the IT-team as a frontend developer rebuilding the website.",
            typeOfProject: "Student Organization",
            image: "/project2.png",
            dev: false,
            techStack: ["React", "Next.js", "Tailwind CSS"],
            githubUrl: "https://github.com/Jepennn",
            demoUrl: "https://project2.com",
        },
        {
            title: "DroneZone",
            id: 3,
            description: "Group project, working on a drone tracking system. Where I was responsible for the setting up the node.js server with express, websocket and supabase.",
            typeOfProject: "Group Project",
            image: "/project2.png",
            dev: false,
            techStack: ["Node.js", "Express.js", "Supabase", "Tailwind CSS", "React"],
            githubUrl: "https://github.com/Jepennn",
            demoUrl: "https://project2.com",
        },
    ]; 


    return (
        <div id="projects" className="min-h-screen mb-40">
            <motion.div
            initial={{ y:100, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ duration: 0.8}}
            viewport={{ amount:0.2, once: true }}
            className="flex flex-col items-start">
            <h1 className="mb-5">Projects</h1>
            <p className="mb-5 w-2/3">Here are a few projects I have worked on and currently working on.<br/>You can find more projects on my <a className="text-blue-500 underline" href="https://github.com/Jepennn">GitHub</a> </p>
            </motion.div>
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    )
}