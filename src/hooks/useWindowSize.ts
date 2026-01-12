import { useEffect, useState } from "react";

export function useWindowSize() {
  // Use 0 as initial value during SSR, will be updated on client
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Set initial size on mount (client-side only)
    setSize(window.innerWidth);

    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
