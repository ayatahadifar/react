import React, { useState } from 'react'

const Navbar = () => { 

    const [nav,setNav] = useState (true) 

    const handleNav = () => {
        setNav(!nav)    
    }


  return (
    <div className='text-white h-24 max-w-[1240px] mx-auto px-4 flex justify-between items-center'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> 
        <ul className='hidden md:flex'>
            <li className='p-4 '>Home</li> 
            <li className='p-4 '>Company</li> 
            <li className='p-4 '>Resources</li>  
            <li className='p-4 '>About</li> 
            <li className='p-4'>Contact</li>
        </ul> 
        <div className='cursor-pointer block md:hidden' onClick={handleNav}> 
            {!nav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars "></i>  }
            
        </div> 
        <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r bg-[#000300] border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}> 
            <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>REACT.</h1> 
            <ul className='pt-12 uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li> 
                <li className='p-4 border-b border-gray-600'>Company</li> 
                <li className='p-4 border-b border-gray-600'>Resources</li>  
                <li className='p-4 border-b border-gray-600'>About</li> 
                <li className='p-4'>Contact</li>    
            </ul>
        </div>
    </div>
  )
}

export default Navbar
