import React from 'react'
import Image from 'next/image'
import PlaceIcon from '@mui/icons-material/Place';
import NearMeIcon from '@mui/icons-material/NearMe';
import Link from 'next/link';
import { footerLinks } from '@/constants';
function Footer() {
  return (
    <>

      <div className="mt-10 padding-x padding-y  bg-[#1D1D1D]  ">

        <div className='flex justify-center border-b-2 border-[#333333] p-2'>
          <Image src="/webcollect.png" alt='' width={120} height={120} />
        </div>

        <div className='flex justify-between gap-5 flex-wrap lg:flex-nowrap'>

          <div className=''>
            <h1 className='text-lg font-bold my-2 text-[#E4E4E4] flex items-center '><PlaceIcon className='text-[#06D889]' /> Address</h1>

            <p className='text-[#FFF] text-sm font-md text-justify my-2'>Gilgit Danyore</p>
            <p className='text-[#FFF] text-sm font-md text-justify my-2'>WebCollect at AlSafeer Hotel</p>
            <h1 className='text-lg font-bold my-2 text-[#E4E4E4] flex items-center '><NearMeIcon className='text-[#06D889]' />Say Hello</h1>

            <p className='text-[#FFF] text-sm font-md text-justify my-2'>lehazali@gmail.com</p>
            <p className='text-[#FFF] text-sm font-md text-justify my-2'>webcollect@gmail.com</p>

          </div>
          {
            footerLinks.map((item,ind)=>(
<div className='flex flex-col gap-2' key={ind}>
            <Link className='text-lg font-bold my-2 text-[#E4E4E4] text-lg font-bold my-2 text-[#E4E4E4] ' href="#">{item.title}</Link>
          
          {
            item.links.map((itm,ind)=>(
              <Link href="#" className='text-[#B5B5B5] text-sm' key={ind}>{itm.title}</Link>

            ))
          }
           
            

          </div>
            ))
          }
          
         
        </div>

      </div>



    </>
  )
}

export default Footer