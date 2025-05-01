import { useEffect, useState } from "react";

export function useWindowSize() {

    const [size, setSize] = useState(window.innerWidth);


    useEffect(() => {
        
        const handleResize = () => setSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Cleanup function
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
}