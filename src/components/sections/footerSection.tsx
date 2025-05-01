import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMail } from "react-icons/io5";




export function Footer(){
    return (
        <>
            <div id="contact" className="border-t-2 py-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex flex-col gap-2">
                    <span className="flex gap-2">
                        <IoMail size={30}/>
                        <h1 className="text-lg">jeppehesselgren@gmail.com</h1>
                    </span>
                </div>
                <div className="flex gap-2">
                    <FaGithub size={30}/>
                    <FaLinkedin size={30}/>
                </div>
            </div>
            <div className="text-center my-5 text-sm">© 2025 Jesper Hesselgren. All rights reserved.</div>
        </>
    )
}