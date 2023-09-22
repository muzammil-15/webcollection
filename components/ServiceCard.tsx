import React from 'react'
import Image from 'next/image'
import NorthEastIcon from '@mui/icons-material/NorthEast';

import { CustomServiceCardProps } from '@/types'

const ServiceCard=({title,icon,desc}:CustomServiceCardProps)=>(
  
    <div className="rounded-lg border border-[0.5px] border-[#333333] border-opacity-7 bg-[#171717] shadow-md p-4">
    
     <Image className='my-2' src={icon} alt='kdk' width={60} height={60} />

      <h1 className='text-lg font-bold my-2 text-[#E4E4E4]'>{title}</h1>
      <p className='text-[#B5B5B5] text-sm font-md text-justify my-2'>{desc}</p>

      <div className='flex gap-3'>
      <NorthEastIcon className='iconmove rounded-full border border-solid border-white border-opacity-100 p-px' />
   <h5 className='text=[#FFF] text-sm items-center cursor-pointer'>Explore More</h5>

      </div>


    </div>
    
    
    
    
    
    
)
export default ServiceCard