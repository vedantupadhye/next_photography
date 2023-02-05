import React,{useState} from 'react'
import Link from 'next/link'
import{AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='fixed top-0 left-9 w-90% z-10 ease-in duration-300 h-18 '>
        <div className='max-w-[1100px] m-auto flex justify-flex items-center p-4 text-white '>
            <Link href='/'></Link>
            <h1 className='font-bold text-4xl'>Captur</h1>
            <ul className='hidden sm:flex ml-[40rem]'>
                < li className='p-4'>
                    <Link href='/'>home</Link>
                </li>

                < li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>

                < li className='p-4'>
                    <Link href='/work'>Work</Link>
                </li>

                < li className='p-4'>
                    <Link href='/contactPage'>contact</Link>
                </li>
            </ul>

            {/* mobile button */}

            <div className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} />:<AiOutlineMenu size={20} />}
            </div>

            {/* mobile menu*/}

            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-centerw-full h-screen bg-black text-center ease-in duration-300'
            :   'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-centerw-full h-screen bg-black text-center ease-in duration-300'}>
            <ul>
                < li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>home</Link>
                </ li>
                < li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                </ li >
                < li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/portfolio'>Work</Link>
                </ li >
                < li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>contact</Link>
                </ li >
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;