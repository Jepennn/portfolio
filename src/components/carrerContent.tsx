import { CarrerCard } from "./carrerCard";

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

export function CareerContent(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 p-5">
            {jobb.map((job, index) => (
                <CarrerCard key={index} company={job.company} position={job.position} description={job.description} date={job.date} svg={job.svg}/>
            ))}
        </div>
    )
}