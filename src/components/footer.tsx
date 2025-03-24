import { JSX } from "react";
import { FaGithub, FaLinkedin, FaPhone,  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"; 

export function Footer() : JSX.Element {
    return (
        <footer className="flex flex-row justify-between items-center p-10 mt-10 border-t-2 border-border">
            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center">
                    <IoMdMail className="cursor-pointer" size={25} onClick={() => window.location.href = "mailto:jeppehesselgren@gmail.com"}/>
                    <p className="text-2xl font-semibold text-left">jeppehesselgren@gmail.com</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FaPhone className="cursor-pointer" size={25}/>
                    <p className="text-2xl font-semibold text-left">0727421511</p>
                </div>
            </div>
            <div className="flex flex-row gap-4 pr-10">
                <a href="https://github.com/jeppehesselgren" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="cursor-pointer" size={37}/>
                </a>
                <a href="https://www.linkedin.com/in/jesper-sandberg-9999999/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="cursor-pointer" size={37}/>
                </a>
            </div>
        </footer>
    )
}