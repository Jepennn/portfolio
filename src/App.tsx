import { Presentation } from "@/components/sections/presentationSection"
import { AboutSection } from "@/components/sections/aboutSection"
import { ProjectSection } from "@/components/sections/projectSection"
import { TechStackSection } from "@/components/sections/techStackSection"
import { Footer } from "@/components/sections/footerSection"



function App() {

  return (
    <> 
      <Presentation />  
      <AboutSection />
      <ProjectSection/>
      <TechStackSection/>
      <Footer/>
    </>
  )
}

export default App
