import { Button } from "@/components/ui/button"
import { JSX } from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export function Introduction(): JSX.Element {

    
    return (
        <>
        <header className=" border-b-2 h-[3.8rem] ">
        <nav></nav>
        </header>
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-30 lg:gap-50 my-30">
            <div className="space-y-2">
                <h1 className="text-6xl font-bold">JESPER</h1>
                <h1 className="text-6xl font-bold">SANDBERG</h1>
                <h1 className="text-6xl font-bold">HESSELGREN</h1>
                <div className="flex flex-row gap-2">
                    <Button className="font-bold cursor-pointer"> Download CV</Button>
                    <FaGithub className="cursor-pointer" size={35}/>
                    <FaLinkedin className="cursor-pointer" size={35}/>
                </div>
            </div>    
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden ring-2 ring-border ">
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