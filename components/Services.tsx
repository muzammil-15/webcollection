import React from 'react'
import ServiceCard from './ServiceCard';


const cards=[{
  title:"Web Development",
  icon:"/web.png",
  desc:"Web development is the process of creating websites and web applications for the internet or intranet."
},{
  
    title:"Web Development",
    icon:"/web.png",
    desc:"Web development is the process of creating websites and web applications for the internet or intranet."
  
},{
  title:"Web Development",
  icon:"/web.png",
  desc:"Web development is the process of creating websites and web applications for the internet or intranet."
},{
  
    title:"Web Development",
    icon:"/web.png",
    desc:"Web development is the process of creating websites and web applications for the internet or intranet."
  
},{
  title:"Web Development",
  icon:"/web.png",
  desc:"Web development is the process of creating websites and web applications for the internet or intranet."
},{
  
    title:"Web Development",
    icon:"/web.png",
    desc:"Web development is the process of creating websites and web applications for the internet or intranet."
  
}]

function Services() {
  return (
    <>
    <div className=' bg-[#1D1D1D]  py-10 padding-x mt-10' id="service">
    <h1 className='globalHeading text-center'>Services & Solutions</h1>
    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">

   {
    cards.map((item,ind)=>(

      <ServiceCard title={item.title} icon={item.icon} desc={item.desc} />
    ))
   }

 
</div>
    </div>
    
    
    
    </>
  )
}

export default Services