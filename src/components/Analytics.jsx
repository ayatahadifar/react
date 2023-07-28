import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white flex md:flex-row  justify-center items-center py-48 sm: flex-col '> 
        <div>
            <img className='w-[600px] mr-24' src={Laptop} alt="Laptop" />
        </div> 
        <div className='w-[600px] flex flex-col p-4 justify-center items-center'>
            <p className='text-[#00df9a] font-bold pb-2'>DATA ANALYTICS DASHBOARD</p> 
            <h1 className='font-bold text-3xl pb-4 '>Manage Data Analytics Centrally</h1> 
            <p className='pb-4 w-full  '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque molestias rem sunt nostrum eligendi soluta consequuntur excepturi cupiditate, dolorum praesentium explicabo eius esse rerum ea aliquam id vel cum!
            </p>
            <button className=' bg-black text-[#00df9a] p-2 px-6 rounded-lg'>Get Started</button>
        </div>
      
    </div>
  )
}

export default Analytics
