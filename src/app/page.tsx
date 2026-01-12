import { Presentation } from "@/components/sections/presentationSection";
import { AboutSection } from "@/components/sections/aboutSection";
import { ProjectSection } from "@/components/sections/projectSection";
import { TechStackSection } from "@/components/sections/techStackSection";
import { Footer } from "@/components/sections/footerSection";


export default function HomePage() {
  return (
    <>
      <Presentation />
      <AboutSection />
      <ProjectSection />
      <TechStackSection />
      <Footer />
    </>
  );
}
