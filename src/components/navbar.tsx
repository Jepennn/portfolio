import { DropdownMenuSeparator } from "./ui/dropdown-menu" 


export function Navbar(){
    return (
        <nav className=" justify-center items-center flex bg-primary-foreground py-5 px-10 rounded-4xl mt-20 mb-20 gap-24 shadow-md">
            <div> About</div>
            <div>Projects</div>
            <div>Experience</div>
            <div>Contact</div>
        </nav>
    )
} 