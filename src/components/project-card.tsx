import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"

export interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  inDevelopment?: boolean
  demoUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  inDevelopment = false,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (

    <Card className="w-full max-w-sm transition-all hover:shadow-lg relative flex flex-col h-full">
      {inDevelopment && (
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 text-xs py-0.5 px-1.5 bg-red-100 text-red-800 z-10 font-medium"
        >
          Under Development
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold mt-2">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className=" text-gray-800">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        {demoUrl && (
          <Button asChild className="flex-1">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" asChild className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
