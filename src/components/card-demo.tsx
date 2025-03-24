import type React from "react"
import { BellRing } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack online store with payment integration with a lot of cool features. This was developt with my friends from school",
    tech: "Next.js, Stripe, Tailwind CSS",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animated transitions",
    tech: "React, Framer Motion, GSAP",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    tech: "TypeScript, Redux, Firebase",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function ProjectCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>My Projects</CardTitle>
        <CardDescription>Showcasing my recent development work.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <BellRing className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Featured Projects</p>
            <p className="text-sm text-muted-foreground">A collection of my best work.</p>
          </div>
        </div>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{project.title}</p>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Tech:</span> {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View All Projects</Button>
      </CardFooter>
    </Card>
  )
}

