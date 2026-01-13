"use client";

import { motion } from "motion/react";
import { ProjectCardCompact } from "../projectCardCompact";
import { ProjectDialog } from "../projectDialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  title: string;
  id: number;
  description: string;
  typeOfProject: string;
  image: string;
  dev?: boolean;
  featured: boolean;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio",
      id: 1,
      description:
        "This is my personal portfolio website built to showcase my skills and projects I have worked on or currently working on.",
      typeOfProject: "Personal Project",
      image: "/project-Images/portfolio.png",
      dev: true,
      featured: true,
      techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      githubUrl: "https://github.com/Jepennn/portfolio",
      demoUrl: "https://www.jesperhesselgren.dev/",
    },
    {
      title: "KTH AI society",
      id: 2,
      description:
        "KTH AI society is a student organization, I'm apart of the IT-team as a frontend developer rebuilding the website.",
      typeOfProject: "Student Organization",
      image: "/project-Images/kth-ai-society.png",
      dev: false,
      featured: true,
      techStack: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS"],
      demoUrl: "https://kthais.com/",
    },
    {
      title: "DroneZone",
      id: 3,
      description:
        "Group project, working on a drone tracking system. Where I was responsible for the setting up the node.js server with express, websocket and supabase.",
      typeOfProject: "Group Project",
      image: "/project-Images/dronezone.png",
      dev: false,
      featured: true,
      techStack: ["Node.js", "Express.js", "Supabase", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/andensanden/II1305",
      demoUrl: "https://dronezone.se",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);
  const displayedProjects = showAllProjects ? projects : featuredProjects;

  return (
    <div id="projects" className="mb-30 sm:mb-40">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex flex-col items-start mb-8"
      >
        <h1 className="mb-5">Projects</h1>
        <p className="mb-5 sm:w-2/3">
          Here are some of my featured projects. <br className="hidden sm:block" />
          You can find more projects on my{" "}
          <a className="text-blue-500 underline" href="https://github.com/Jepennn">
            GitHub.
          </a>{" "}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCardCompact
              title={project.title}
              description={project.description}
              typeOfProject={project.typeOfProject}
              image={project.image}
              techStack={project.techStack}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {additionalProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            size="lg"
            className="group hover:scale-105 transition-all duration-300 shadow-md"
          >
            {showAllProjects ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                View More Projects ({additionalProjects.length})
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>
      )}

      {/* Project Dialog */}
      {selectedProject && (
        <ProjectDialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          typeOfProject={selectedProject.typeOfProject}
          image={selectedProject.image}
          dev={selectedProject.dev}
          techStack={selectedProject.techStack}
          demoUrl={selectedProject.demoUrl}
          githubUrl={selectedProject.githubUrl}
        />
      )}
    </div>
  );
}
