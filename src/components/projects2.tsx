import { JSX } from "react"
import { ProjectCard } from "@/components/project-card"
import { TodoListInfo, FilmdleInfo, FoodSwipeInfo } from "@/data/projectData.ts"


export function Projects2(): JSX.Element{

    return(
        <div className="flex flex-col justify-center items-center p-10 mt-10" id="projects">
            <h1 className="text-6xl font-bold mb-5">Projects</h1>
            <p className="text-2xl font-semibold mb-10 text-center">Here are some of my projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard {...TodoListInfo} />
                <ProjectCard {...FilmdleInfo} />
                <ProjectCard {...FoodSwipeInfo} />
            </div>
        </div>

    );

}