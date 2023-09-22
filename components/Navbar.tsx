"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Menunav from './Menunav';
import { navlinks } from '@/constants';
import CustomButton from './CustomButton';


function Navbar() {
  return (
   <>
  <header className='h-[80px] padding-x bg-[#1D1D1D] flex justify-between items-center border-b-2 border-[#333333]'>



    <div className='flex items-center'>
    <Image src='/webcollect.png' alt='' height={60} width={120}/>
 
    </div>
   <div className='hidden lg:block navbar'>
      {
        navlinks.map((item)=>(
          <Link className='mx-6 text-[#FFF] text-lg hover:text-[#06D889]' key={item.title} href={item.url}>{item.title}</Link>
        ))
      }
</div>
<div className='hidden lg:block '>

<CustomButton  title="Contact US"/></div>

<div className="block lg:hidden">

  <Menunav/>
</div>
  


  </header>
   
   
   
   
   </>
  )
}

export default Navbar