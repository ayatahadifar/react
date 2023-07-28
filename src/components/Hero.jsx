import React from 'react' 
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className=' flex  flex-col justify-center items-center mt-[200px] mx-auto'>
        <h4 className=' pb-3 md:text-1xl text-1xl uppercase text-[#00df9a]'>Growing with data analytics</h4> 
        <h1 className=' pb-3 md:text-4xl  text-2xl  font-bold text-white '>GROW WITH DATA.</h1> 
        <div className='flex'> 
            <h3 className='text-white pb-3 pr-2 '>Fast, flexible financing for </h3> 
            <Typed className='text-white' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop  />
        </div> 
        
        <h4 className='text-[#53565D] pb-3 text-center '>Monitor your data Analytics to increase revenue for BTB,BTC, <br />& SASS platforms </h4> 
        <button className='bg-[#00df9a] cursor-pointer text-black p-2 px-7 mb-4 rounded-lg' >Get started</button>
    </div>
  )
}

export default Hero
