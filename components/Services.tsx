import React from 'react'
import ServiceCard from './ServiceCard';


const cards=[{
  title:"Web Development",
  icon:"/webskill.svg",
  desc:"Web development is the process of creating websites and web applications for the internet or intranet."
},{
  
    title:"Graphic Designing",
    icon:"/graphicskill.svg",
    desc:"Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet."
  
},{
  title:"UI UX Designing",
  icon:"/uxuiskill.svg",
  desc:"Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access."
},{
  
    title:"Gis and RS",
    icon:"/gisskill.svg",
    desc:"Web development is the process of creating websites and web applications for the internet or intranet."
  
},{
  title:"Software Development",
  icon:"/softwareskill.svg",
  desc:"Software development is the process of creating computer software programs that  perform specific functions or tasks."
},{
  
    title:"Mobile App Development",
    icon:"/mobileskill.svg",
    desc:"Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands."
  
}]

function Services() {
  return (
    <>
    <div className=' bg-[#1D1D1D]  py-10 padding-x mt-10' id="service">
    <h1 className='globalHeading text-center'>Services & Solutions</h1>
    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">

   {
    cards.map((item,ind)=>(

      <ServiceCard title={item.title} icon={item.icon} desc={item.desc} key={ind} />
    ))
   }

 
</div>
    </div>
    
    
    
    </>
  )
}

export default Services