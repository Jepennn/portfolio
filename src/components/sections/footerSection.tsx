import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMail } from "react-icons/io5";




export function Footer(){
    return (
        <>
            <div id="contact" className="border-t-2 py-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex flex-col gap-2">
                    <span className="flex gap-2">
                        <IoMail size={30}/>
                        <h1 className="text-lg"><a href="mailto:jeppehesselgren@gmail.com">jeppehesselgren@gmail.com</a></h1>
                    </span>
                </div>
                <div className="flex gap-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jepennn"><FaGithub size={30}/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jesper-hesselgren-412220197/"><FaLinkedin size={30}/></a>
                </div>
            </div>
            <div className="text-center my-5 text-sm">© 2025 Jesper Hesselgren. All rights reserved.</div>
        </>
    )
}