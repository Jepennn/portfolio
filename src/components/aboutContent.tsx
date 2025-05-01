
import { useState} from "react"
import { AboutMeContent } from "./aboutmeContent";
import { CareerContent } from "./carrerContent";
import { EducationContent } from "./educationContent";


export function AboutContent(){

    const [content, setContent] = useState("About me");

    return (
        <div className="flex flex-col mt-4 sm:mt-8">
            <div className="flex flex-row justify-start items-center border-b-2 pb-4 gap-4">
                    <span onClick={() => setContent("About me")} className="rounded-4xl border-1 p-2 sm:p-3 bg-primary-foreground shadow-md cursor-pointer hover:scale-110 hover:bg-secondary-gray transition-all">About me</span>
                    <span onClick={() => setContent("Carrer")} className="rounded-4xl border-1 p-2 sm:p-3 bg-primary-foreground shadow-md cursor-pointer hover:scale-110 hover:bg-secondary-gray transition-all">Carrer</span>
                    <span onClick={() => setContent("Education")} className="rounded-4xl border-1 p-2 sm:p-3 bg-primary-foreground shadow-md cursor-pointer hover:scale-110 hover:bg-secondary-gray transition-all">Education</span>
            </div>

            {/* TODO: Add content for about me, carrer and education */}
            {content === "About me" && <AboutMeContent/>}
            {content === "Carrer" && <CareerContent/>}
            {content === "Education" && <EducationContent/>}
        </div>
    )
}







