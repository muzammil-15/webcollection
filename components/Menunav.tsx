import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { navlinks } from '@/constants';
import Link from 'next/link';

const Menunav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  
  return (
    <div className="absolute z-10">
      
        <MoreVertIcon className='text-[#FFF]' onClick={toggleMenu} />
      
      {menuVisible && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
              <ul>
            {
                navlinks.map((item,ind)=>(
                    <li className="px-4 py-2 hover:bg-gray-100" key={ind}>
                    <Link  className='text-[#000000]' key={item.title} href={item.url}>{item.title}</Link></li>
                ))
            }
        
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menunav;
