import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { Menu } from 'lucide-react';


export function HamburgerMenu(){
    return (
        <div className="flex justify-end w-full mt-2">
            <DropdownMenu>
                <DropdownMenuTrigger className="p-2 bg-primary-foreground rounded-full">
                    <Menu size={24}/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-primary-foreground text-primary-text-color font-semibold w-32 p-2 rounded-sm">
                    <DropdownMenuItem><a href="#about">About</a></DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-primary-text-color"/>
                    <DropdownMenuItem><a href="#projects">Projects</a></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><a href="#techStack">Tech stack</a></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><a href="#contact">Contact</a></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}