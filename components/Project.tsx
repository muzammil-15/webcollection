import React from 'react'
import CustomButton from './CustomButton';
import NorthEastIcon from '@mui/icons-material/NorthEast';
const projects = [{
    title: "Web development",
    domain: "FG Degree College Web",

}

]


function Project() {

    return (
        <div className='padding-y padding-x bg-[] mt-12 lg:h-screen'>

            <div className="flex justify-between items-center flex-col lg:flex-row">


                <div>
                    <h1 className='globalHeading text-[#FFF] my-2'>Completed Projects</h1>
                    <p className='globalpara my-2'> we strive to understand our Clint business goals first then all decisions are made   with those.</p>

                </div>
                <div>
                    <CustomButton title="View All Project" />
                </div>

            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">



                <div className="bg-[url('/project.png')] p-5  bg-cover   w-full h-[380px] object-cover flex  items-end" >


                    <div className='projectInfo bg-[#1B1F23] w-full px-4 py-6  cursor-pointer'>
                        <div className='flex justify-between items-center'>
                            <h6 className='text-[#D6D3D3] text-sm font-medium'>Web Development</h6>
                            <NorthEastIcon className='bg-[#06D889] text-[#000] rounded-full p-1' />
                        </div>
                        <h1 className='text-[#FFF] text-lg sm:text-2xl  font-bold'>FG Degree College Web</h1>


                    </div>




                </div>
                <div className="bg-[url('/project.png')] p-5  bg-cover   w-full h-[380px] object-cover flex  items-end" >


<div className='projectInfo bg-[#1B1F23] w-full px-4 py-6  cursor-pointer'>
    <div className='flex justify-between items-center'>
        <h6 className='text-[#D6D3D3] text-sm font-medium'>Web Development</h6>
        <NorthEastIcon className='bg-[#06D889] text-[#000] rounded-full p-1' />
    </div>
    <h1 className='text-[#FFF] text-lg sm:text-2xl  font-bold'>FG Degree College Web</h1>


</div>




</div>
<div className="bg-[url('/project.png')] p-5  bg-cover   w-full h-[380px] object-cover flex  items-end" >


<div className='projectInfo bg-[#1B1F23] w-full px-4 py-6  cursor-pointer'>
    <div className='flex justify-between items-center'>
        <h6 className='text-[#D6D3D3] text-sm font-medium'>Web Development</h6>
        <NorthEastIcon className='bg-[#06D889] text-[#000] rounded-full p-1' />
    </div>
    <h1 className='text-[#FFF] text-lg sm:text-2xl  font-bold'>FG Degree College Web</h1>


</div>




</div>







            </div>
        </div>
    )
}

export default Project