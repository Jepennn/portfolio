
import { ProjectCardProps } from "@/components/project-card"

export const TodoListInfo : ProjectCardProps ={
    title: "MERN TodoApp", 
    description: "One of the first projects I developed, a todo application built with MERN stack",
    techStack: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    inDevelopment: false,
    demoUrl: "https://mern-todo-list-frontend-9f4scvg8y-jespers-projects-d7ce381a.vercel.app/",
    githubUrl: "https://github.com/Jepennn/MERN-todo-list",
}

export const FilmdleInfo : ProjectCardProps = {
    title: "Filmdle", 
    description: "The famous Wordle game but for movies, built as a group project for the course DH2642.",
    techStack: ["React", "JavaScript", "Redux", "CSS", "Firebase"],
    inDevelopment: false,
    demoUrl: "https://filmdle.web.app/",
    githubUrl: "https://gits-15.sys.kth.se/iprog-students/danielo2-jespersh-petternb-trydow-HT24-Project/tree/main/filmdle",
}

export const FoodSwipeInfo : ProjectCardProps = {
    title: "FoodSwipe", 
    description: "A tinder-like app for recipes, perfect for finding new recipes to try.",
    techStack: ["React", "JavaScript", "Redux", "CSS", "Supabase"],
    inDevelopment: true,
    demoUrl: "https://recipe-tinder-67cj0anjc-jespers-projects-d7ce381a.vercel.app/",
    githubUrl: "https://github.com/Jepennn/FoodSwipe",
}
