import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'


const Contact = () => {
  return (
    <div>
        <Navbar />
        <Hero heading='Contact' message='Submit the form below for more work enquiries'/>
        <div className='max-w-[1240px] m-auto p-4 h-screen' >
            <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
            <form className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input className='border shadow-lg p-3 w-full' type='text' placeholder='Name'/>
                    <input className='border shadow-lg p-3 w-full' type='text' placeholder='Email'/>
                </div>
                <input className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject'/>
                <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
                <button className='border shadow-lg p-3 w-full mt-2 hover:grayscale-0'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact