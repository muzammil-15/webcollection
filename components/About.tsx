import React from "react";
import Image from "next/image";
import Documentory from "./Documentory";
const exerties = [
  {
    title: "GIS Expertise",
  },
  {
    title: "UI/UX Mastery",
  },
  {
    title: "Graphic Design Excellence",
  },
  {
    title: "Web Development Prowess",
  },
  {
    title: "Holistic Approach",
  },
  {
    title: "Custom Solutions",
  },
];
const About = () => {
  return (
    <>
      <div
        className="About md:h-screen padding-y padding-x mt-12 gap-5 flex items-center justify-between flex-col md:flex-row"
        id="about"
      >
        <div className="w-full md:flex-1 ">
          <h1 className="globalHeading my-5">Who We Are</h1>
          <p className="text-[#FCFCFC] globalpara">
            We are a dynamic digital agency with a multifaceted skill set,
            offering expertise in GIS for spatial insights, captivating UI/UX
            design for exceptional user experiences, and top-notch graphic
            design combined with robust web development, empowering businesses
            to achieve their digital goals.
          </p>
          <div className="grid grid-cols-2 gap-5 my-5">
            {exerties.map((item, ind) => (
              <div className="flex gap-2 items-center" key={ind}>
                <Image src="/Vector.png" alt="" width={15} height={15} />
                <h5 className="text-[#D7D7D7]">{item.title}</h5>
              </div>
            ))}
          </div>
          <p className="text-[#FCFCFC] globalpara">
            We pride ourselves on our commitment to client satisfaction,
            delivering on-time, within budget, and exceeding expectations. Your
            success is our success, and we are dedicated to helping you achieve
            your digital ambitions.
          </p>
        </div>
        <div className="w-[70%] md:flex-1 flex justify-end ">
          <div className="about__image">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82_Tf6uPr9CA6HXutUMFTIcLSIV8GN1HmTA&usqp=CAU"
              alt=""
              fill
            />

            <div className="md:absolute inset-0 ml-[-100px] flex items-end py-5 text-white">
              <Documentory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
