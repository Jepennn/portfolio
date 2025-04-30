interface TechStackCardProps {
    title: string;
    svg: string;
}

export function TechStackCard({title, svg}: TechStackCardProps){
    return (
        <div className="flex flex-row items-center justify-center gap-4 border-2 rounded-4xl shadow-md py-2 px-2">
            <img src={svg} alt={title} className="w-6 h-6" />
            <h5>{title}</h5>
        </div>
    )   
}