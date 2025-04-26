import { motion } from "motion/react"
import { useState} from "react"
import { EducationCard } from "./educationCard";
import { CarrerCard } from "./carrerCard";


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
        <motion.div className="flex justify-start p-5 my-5 gap-12">
        <p className="w-2/3 text-lg">
        I'm a 24-year-old KTH student, currently in my second year of the Information Technology program. I have a strong passion for programming, software development, and tech in general. I love exploring new technologies, learning new frameworks, and building different types of applications. When I am not studying or playing around with code, I enjoy training at the gym, going for runs, playing football, and spending quality time with my friends and family. I also have a big interest in reading books, both fiction and non-fiction, especially those related to personal development and technology trends. I always strive to challenge myself, learn new things, and grow both personally and professionally.
        </p>
        <img src="/profile.jpeg" alt="profile-image" className="h-64 w-64 object-cover border-6 border-primary-orange rounded-4xl" />
        </motion.div>
    )
}


const jobb = [
    {
        company: "KTH AI Society",
        position: "Frontend Developer",
        description: "Working at KTH AI Society's IT team as a frontend developer, building a new website.",
        date: "2025 mar - present",
        svg: "/kthaisociety_logo.jpg"
    }, 
    {
        company: "Nordnet",
        position: "Clearing & Settlements Administrator",
        description: "Worked at Nordnet's Clearing and Settlements department under summer 2024. I worked with transfering securities and funds internal and external between banks.",
        date: "2024 jun - 2024 aug",
        svg: "/nordnet-icon.svg"
    }
]


{/* TODO: Career component*/}
function CareerContent(){
    return (
        <div className="grid grid-cols-2 gap-10 my-5 p-5">
            {jobb.map((job, index) => (
                <CarrerCard key={index} company={job.company} position={job.position} description={job.description} date={job.date} svg={job.svg}/>
            ))}
        </div>
    )
}

{/* TODO: Education component*/}
function EducationContent(){
    return (
        <div className="my-5 p-5">
        <EducationCard/>
        </div>
    )
}
