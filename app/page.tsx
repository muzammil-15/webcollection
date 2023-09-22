import About from "@/components/About";
import Expert from "@/components/ExpertSection";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="bgcolor">
     
       <Hero/>
      
       <Services/>
       <About/>
       <Project/>
       <Expert/>

       
    </main>
  )
}
