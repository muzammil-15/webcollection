"use client"

import React,{useState} from 'react';
// import emailjs from '@emailjs/browser';



function ContactForm() {
//   const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=> {
//     e.preventDefault();
 
   
//     emailjs.sendForm('service_nk4pyg4', 'template_5fngysr',e.target as HTMLFormElement, 'r5ehKnvS_E3IxbTRu')
//     .then((result) => {
//         alert("Thank for Contact Us")
//     }, (error) => {
//         console.log(error.text);
//     });
    

    
//   };
  
  
  return (
    <form  className='flex flex-col'>
       

        <input required name='name' type="text"  className='mb-5   rounded-md border border-opacity-45 bg-[#313030] border-white bg-opacity-15 p-4   focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold '  placeholder='NAME*' />
        
        <input required type="email"  name="email"   className='mb-5   rounded-md border border-opacity-45 bg-[#313030] border-white bg-opacity-15 p-4   focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold ' placeholder='EMAIL*' />


          <textarea required name="message"   className='mb-5   rounded-md border border-opacity-45 bg-[#313030] border-white bg-opacity-15 p-4   focus:outline-none placeholder:text-[#626262] placeholder:font-extrabold ' placeholder='MESSAGE*'  ></textarea>

          <button type='submit' className='bg-[#06D889] py-2 text-[#000] text-lg font-medium rounded-md'>Send Message</button>
       
          </form>
    
  )
}

export default ContactForm