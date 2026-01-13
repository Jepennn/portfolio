"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardCompactProps {
  title: string;
  description: string;
  typeOfProject: string;
  image: string;
  techStack: string[];
  onClick: () => void;
}

export function ProjectCardCompact({
  title,
  description,
  typeOfProject,
  image,
  techStack,
  onClick,
}: ProjectCardCompactProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="cursor-pointer border-2 rounded-4xl shadow-lg overflow-hidden bg-card hover:shadow-2xl transition-shadow group"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="mb-1.5 text-lg">{title}</h3>
        <h5 className="mb-2 text-sm">{typeOfProject}</h5>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{description}</p>

        {/* Tech Stack Preview - Show only first 3 */}
        <div className="flex gap-1.5 flex-wrap">
          {techStack.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              className="bg-secondary-gray text-gray-800 shadow-sm text-xs px-2 py-0.5"
            >
              {tech}
            </Badge>
          ))}
          {techStack.length > 3 && (
            <Badge className="bg-secondary-gray text-gray-800 shadow-sm text-xs px-2 py-0.5">
              +{techStack.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}
