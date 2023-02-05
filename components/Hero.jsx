import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]/'>
          <div className='text-white p-5 z-[2] ml-[26rem] mt-[11rem]'> 
            <h2 className='text-4xl py-2 font-bold'>{heading}</h2>
            <p className='py-3 text-xl'>{message}</p>
            <button className='px-4 py-1 border '>click</button>
            </div>
        </div>
    </div>
  );
};

export default Hero