import { motion, MotionConfig } from "motion/react"
import { useState} from "react"
import { EducationCard } from "./educationCard";


export function NavbarAbout(){

    const [content, setContent] = useState("About me");

    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-row justify-start items-center border-b-2 pb-4 gap-4">
                    <span onClick={() => setContent("About me")} className="rounded-4xl border-1 p-3 bg-primary-foreground shadow-md cursor-pointer hover:scale-110 hover:bg-secondary-gray transition-all">About me</span>
                    <span onClick={() => setContent("Carrer")} className="rounded-4xl border-1 p-3 bg-primary-foreground shadow-md cursor-pointer hover:scale-110 hover:bg-secondary-gray transition-all">Carrer</span>
                    <span onClick={() => setContent("Education")} className="rounded-4xl border-1 p-3 bg-primary-foreground shadow-md cursor-pointer hover:scale-110 hover:bg-secondary-gray transition-all">Education</span>
            </div>

            {/* TODO: Add content for about me, carrer and education */}
            {content === "About me" && <AboutMeContent/>}
            {content === "Carrer" && <CareerContent/>}
            {content === "Education" && <EducationContent/>}
        </div>
    )
}


{/* TODO: About me component*/}
function AboutMeContent(){
    return (
        <motion.div className="flex justify-start items-center p-10 gap-10">
        <p className="w-2/3">
        I'm a 24 year old KTH student, currently studying my second year at the
        information technology program. I have a passion for programming and
        tech in general. When I am not studying or playing around with code, I
        like to train, spend time with my friends and family and read books.
        </p>
        <img src="/profile.jpeg" alt="profile-image" className="h-64 w-64 object-cover border-6 border-primary-orange rounded-4xl" />
        </motion.div>
    )
}

{/* TODO: Career component*/}
function CareerContent(){
    return (
        <motion.div 
        className="flex justify-start items-center p-10 gap-10">
        <p className="w-2/3">
        It's here that the content about my carrer will exist
        </p>
        </motion.div>
    )
}

{/* TODO: Education component*/}
function EducationContent(){
    return (
        <motion.div className="my-10">
        <EducationCard/>
        </motion.div>
    )
}
