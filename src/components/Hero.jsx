import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <div name="Hero" className='w-full h-screen bg-[#0a192f] '> 
     
      {/*container  */}
     
      <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full '>

      <p className='text-pink-600 text-2xl w-[148px]'>Hi,my name is </p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6] w-[319px] max-sm:w-[204px] '>Virendra Kaira</h1>
       
      <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0] w-[407px] max-sm:w-[271px]'>I'm a FrontEnd Developer</h2>
       
        <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl sm:text-3xl'>I'm a front-end developer skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind, and React JS  i am adept at creating visually appealing and responsive user interfaces.  </p>
         <div>
          <button className='text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 text-2xl sm:text-3xl '>View Work  
           <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button> 
            
         </div>
         </div>
      </div>
       
  )
}

export default Hero
