import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { Menu } from 'lucide-react';
import { Switch } from "@/components/ui/switch";


export function HamburgerMenu(){
    return (
        <div className="flex justify-end items-center mr-15 mt-10">
            {/* <DropdownMenu>
                <DropdownMenuTrigger className="p-3 bg-primary-foreground rounded-full">
                    <Menu size={32}/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-primary-foreground text-primary-text-color font-semibold w-32 p-2 rounded-sm">
                    <DropdownMenuItem>Home</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-primary-text-color"/>
                    <DropdownMenuItem>Projects</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Contact</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
            <Switch/>
        </div>
    )
}