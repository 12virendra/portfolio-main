import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div name="Hero" className='w-full h-screen bg-[#0a192f] '> 
     
      {/*container  */}
     
      <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full '>

      <p className='text-pink-600 text-2xl w-[148px] shadow-sm shadow-pink-400'>Hi,my name is </p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6] w-[319px] max-sm:w-[204px] shadow-sm shadow-white '>Virendra Kaira</h1>
       
      <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0] w-[407px] max-sm:w-[271px]'>I'm a FullStack Developer</h2>
       
        <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl sm:text-3xl'>I'm a Full-Stack developer skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind, React JS Node js and MongoDB  i am adept at creating visually appealing and responsive user interfaces.  </p>
         <div>

<Link to="work" smooth={true} duration={500} >

<button className='text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 text-2xl sm:text-3xl '>View Work  
          
           <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3 ' />
          </span>

            </button> 
            </Link>

          
            
            
         </div>
         </div>
      </div>
       
  )
}

export default Hero
