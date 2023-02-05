import React from 'react'
import img1 from '../public/img1.jpg';
import img2 from '../public/img2.jpg';
import img3 from '../public/img3.jpg';
import img4 from '../public/img4.jpg';
import img5 from '../public/img5.jpg';
import img6 from '../public/img6.jpg';
import Instagramimg from './Instagramimg';


const Instagram = () => {
  return (
    <div className='mt-96 pt-48 max-w-[640] text-center mx-auto  '>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@CAPTUR</p>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instagramimg socialImg={img1} />
            <Instagramimg socialImg={img2} />
            <Instagramimg socialImg={img3} />
            <Instagramimg socialImg={img4} />
            <Instagramimg socialImg={img5} />
            <Instagramimg socialImg={img6} />
        </div>
    </div>
  )
}

export default Instagram

