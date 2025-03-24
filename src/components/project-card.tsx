import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
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
    <Card className="w-full max-w-sm transition-all hover:shadow-lg relative">
      {inDevelopment && (
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 text-xs py-0.5 px-1.5 bg-red-100 text-red-800 z-10 font-medium"
        >
          Dev
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
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

