import React from 'react';
import Image from 'next/image';
import { experts } from '@/constants';
function ExpertSection() {
  return (
    <div className='relative padding-x padding-y mt-12'>
      <h1 className='globalHeading text-center my-5'>Our Experts</h1>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{
  experts.map((item,ind)=>(
    <div className='bg-[#121212] p-5 border-2 border-[#414141] border-l-10 rounded-t-full h-100 flex flex-col items-center justify-center' key={ind}>

    <Image src={`${item?.img}`} alt='' width={400} height={300} />
    <h1 className='text-[#FFF] text-lg font-bold'>{item?.name}</h1>
    <p className='text-[#FFF] text-opacity-50 text-sm'>{item?.status}</p>

  </div>

  ))
}

       



      </div>


    </div>
  )
}

export default ExpertSection