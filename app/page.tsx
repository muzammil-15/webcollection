import About from "@/components/About";
import Contact from "@/components/Contact";
import Expert from "@/components/ExpertSection";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Testimonail from "@/components/Testimonail";
export default function Home() {
  return (
    <main className="bgcolor">
     
       <Hero/>
      
       <Services/>
       <About/>
       <Project/>
       <Expert/>
       <Testimonail/>
       <Contact/>
       <Location/>

       
    </main>
  )
}
