import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
  
   

      <div className='hero padding-x padding-y   '>
        <div className="flex-1 ">
          <h1 className='hero__title'>Unlock your potential with the limitless possibilities of IT skills</h1>
          <p className='hero__subtitle'>Our agency specializes in delivering a diverse spectrum of IT skills, from cutting-edge software development and cybersecurity expertise to seamless network infrastructure management, empowering businesses to thrive in the digital era.

          </p>

         <CustomButton title="Get a Quate"/>
        </div>
        <div className='hero__image-container '>
          <div className="hero__image mt-20">
            <Image src='/hero.png' alt='lldj' fill /></div>


        </div>

      </div>  
  )
}

export default Hero
