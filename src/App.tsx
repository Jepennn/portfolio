import { Presentation } from "@/components/sections/presentationSection"
import { AboutSection } from "@/components/sections/aboutSection"
import { ProjectSection } from "@/components/sections/projectSection"
import { TechStackSection } from "@/components/sections/techStackSection"
import { Footer } from "@/components/sections/footerSection"



function App() {

  return (
    <> 
      {/* <Navbar/> */}
      <Presentation />  
      <AboutSection/>
      <ProjectSection/>
      <TechStackSection/>
      <Footer/>

      {/* Maybe remove and only have a footer with my details*/ }
      {/* <HamburgerMenu/> */} 
    </>
  )
}

export default App
