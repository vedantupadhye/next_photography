import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240] mx-auto py-12 text-center'>
        <h1 className='text-2xl'> Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-col-5 p-4 md:gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-3'>
                {/* <Image src='https://images.unsplash.com/photo-1540514869736-ba72790e9a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' 
                alt='/' width= '670' height='450' /> */}
            </div>

            <div className='w-full h-full '>      
            <Image src='https://images.unsplash.com/photo-1492584328860-c0c7bb599679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                alt='/' width= '670' height='450'  />
            </div>

            <div className='w-full h-full '>
            <Image src='https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                alt='/' width= '670' height='450'  />
            </div>

            <div className='w-full h-full '>
            <Image src='https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                alt='/' width= '670' height='450'  />
            </div>

            <div className='w-full h-full '>
            <Image src='https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                alt='/' width= '670' height='450'  />
            </div>

            <div className='w-full h-full '>
            <Image src='https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                alt='/' width= '670' height='450'  />
            </div>

            <div className='w-full '>
            <Image src='https://images.unsplash.com/photo-1492584328860-c0c7bb599679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                alt='/' width= '670' height='650'  />
            </div>
        </div>
    </div>
    
  )
}

export default Portfolio