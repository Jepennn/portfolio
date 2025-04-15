import { Button } from "@/components/ui/button"
import { JSX } from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export function Introduction(): JSX.Element {

    
    return (
        <>
        <header className=" border-b-2  p-10">
        <nav className="flex gap-5 mx-20">
            <a href="#about-me" className="text-xl font-semibold hover:underline">About Me</a>
            <a href="#projects" className="text-xl font-semibold hover:underline">Projects</a>
            <a href="#contact" className="text-xl font-semibold hover:underline">Contact</a>
        </nav>
        </header>
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-25 lg:gap-40 mt-30 mb-10 lg:my-50">
            <div className="space-y-2">
                <h1 className="text-5xl font-bold lg:text-8xl md:text-6xl">JESPER</h1>
                <h1 className="text-5xl font-bold lg:text-8xl md:text-6xl">SANDBERG</h1>
                <h1 className="text-5xl  font-bold lg:text-8xl md:text-6xl">HESSELGREN</h1>
                <div className="flex flex-row gap-4 mt-3">
                    <Button className=" font-bold cursor-pointer hover:scale-110 p-5 lg:text-lg " onClick={() => window.location.href = "/CV.pdf"}>Download CV</Button>
                    <FaGithub className="cursor-pointer hover:scale-115" size={37}/>
                    <FaLinkedin className="cursor-pointer hover:scale-115" size={37}/>
                </div>
            </div>    
            <div className="w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden ring-2 ring-border ">
                <img 
                    src="/profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        </>
    )
}