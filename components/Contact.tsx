import React from 'react';


import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ContactForm from './ContactForm';
const info = [

    {
        title: "Address",
        Icon: <PinDropIcon className='text-5xl  p-1 rounded-full cursor-pointer' />,
        desc: "Industrial Area, Shahab Pura, Sialkot,Pakistan"
    },
    {
        title: "Phone",
        Icon: <PhoneIcon className='text-5xl  p-1 rounded-full cursor-pointer' />,
        desc: "+923032345555​"
    },
    {
        title: "Email",
        Icon: <EmailIcon className='text-5xl  p-1 rounded-full cursor-pointer' />,
        desc: "kamiindustriesofficial@gmail.com​"
    }
];

function Contact() {
  return (
   <>
   
   
   <div className="padding-x lg:h-screen bg-[#171717] mt-10    py-10 flex lg:items-center  flex-col md:flex-row gap-5" id="contact">
                <div className='flex-1'>
                    <h1 className='globalHeading text-[#363636] mb-3'>Contact Info</h1>

                    <div className='flex flex-col gap-10'>
                        {
                            info.map((item, ind) => (
                                <div className='flex items-center  gap-5' key={ind}>
                                    <div className='rounded-full w-15 h-15 p-2 border-2 flex items-center justify-center border-[#D0D0D0]'>
                                        {item.Icon}

                                    </div>
                                    <div>
                                        <h3 className='cardheading'>{item.title}</h3>
                                        <p className='text-[#FFF] text-opacity-50 text-sm'>{item.desc}</p>

                                    </div>
                                </div>

                            ))
                        }





                    </div>

                </div>
                <div className='flex-1'>
                    <h1 className='globalHeading mb-5'>Get in <span className='text-[#2697D3]'>Touch Us</span></h1>
                   <ContactForm/>
                </div>



            </div>
   
   
   
   
   
   
   </>
  )
}

export default Contact