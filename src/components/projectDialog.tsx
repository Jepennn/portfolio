"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaGithub, FaExternalLinkAlt, FaDev } from "react-icons/fa";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  typeOfProject: string;
  image: string;
  dev?: boolean;
  demoUrl?: string;
  techStack: string[];
  githubUrl?: string;
}

export function ProjectDialog({
  open,
  onOpenChange,
  title,
  description,
  typeOfProject,
  image,
  dev,
  techStack,
  demoUrl,
  githubUrl,
}: ProjectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            {title}
            {dev && (
              <Badge variant="outline" className="gap-1">
                <FaDev /> In Development
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription className="text-base">{typeOfProject}</DialogDescription>
        </DialogHeader>

        {/* Project Image */}
        <div className="rounded-lg overflow-hidden border-2 my-4">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
        </div>

        {/* Description */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-lg">About this project</h4>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Technologies Used</h4>
            <div className="flex gap-2 flex-wrap">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-secondary-gray text-gray-800 shadow-md hover:scale-105 transition-transform"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {githubUrl && (
              <Button
                asChild
                variant="default"
                className="gap-2 bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={18} />
                  View on GitHub
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button asChild variant="outline" className="gap-2">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
