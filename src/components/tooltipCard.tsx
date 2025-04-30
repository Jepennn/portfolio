import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export function TooltipCard({ children, content, link }: { children: React.ReactNode, content: string, link: string }){

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="animation-button w-fit"> <a href={link} target="_blank" rel="noopener noreferrer">{children}</a></TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
    