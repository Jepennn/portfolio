import { JSX } from "react"
import { ProjectCard } from "@/components/project-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  export function Projects() : JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="text-6xl font-bold mb-5">Projects</h1>
            <p className="text-2xl font-semibold mb-10">Here are some of my projects</p>
            <Carousel className="w-[400px] h-[400px]">
                <CarouselContent>
                    <CarouselItem>
                    <ProjectCard title="Project 1" description="Description 1" techStack={["Tech 1", "Tech 2"]} inDevelopment={true} demoUrl="https://project1.com" githubUrl="https://github.com/project1"  />
                    </CarouselItem>
                </CarouselContent>
                <CarouselContent>
                    <CarouselItem>
                    <ProjectCard title="Project 1" description="Description 1" techStack={["Tech 1", "Tech 2"]} inDevelopment={true} demoUrl="https://project1.com" githubUrl="https://github.com/project1"  />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />    
                <CarouselNext />
            </Carousel>
        </div>
    )
  }