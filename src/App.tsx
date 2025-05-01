import { Presentation } from "@/components/sections/presentationSection"
import { AboutSection } from "@/components/sections/aboutSection"
import { ProjectSection } from "@/components/sections/projectSection"
import { TechStackSection } from "@/components/sections/techStackSection"
import { Footer } from "@/components/sections/footerSection"
import { HamburgerMenu } from "@/components/hamburgerMenu"



function App() {

  return (
    <> 
      <Presentation />  
      {/* <HamburgerMenu/>  */}
      <AboutSection />
      <ProjectSection/>
      <TechStackSection/>
      <Footer/>

      {/* Maybe remove and only have a footer with my details*/ }
    </>
  )
}

export default App
