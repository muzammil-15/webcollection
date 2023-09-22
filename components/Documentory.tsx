import React from 'react';

const Documentory = () => {
    return (
        <div className="w-48 h-48 rounded-full overflow-hidden ">
        
           
                <video controls  className='w-full h-full object-cover'>
                    <source src="/documentory.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

        </div>
    );
};

export default Documentory;
