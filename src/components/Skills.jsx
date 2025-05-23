import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';



const Skills = () => {
  return (
      <div name="skills" className='w-full  bg-[#0a192f] text-gray-300'>
          {/* container */}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-[270px]'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                  <p className='py-4 max-sm:text-[25px]'>These are the teachnologies I've worked with .</p>
                 </div>
             
              <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                  <p className='max-md:text-[20px]'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={CSS} alt="CSS" />
                  <p className='max-md:text-[20px]'>CSS</p>
                  </div>
                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript" />
                  <p className='max-md:text-[20px]'>JavaScript</p>
                  </div>
                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={ReactImg} alt="React" />
                  <p className='max-md:text-[20px]'>React</p>
                  </div>
                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind" />
                  <p className='max-md:text-[20px]'>Tailwind</p>
                  </div>
                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={GitHub} alt="GitHub" />
                  <p className='max-md:text-[20px]'>GitHub</p>
                  </div>

                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={mongo} alt="GitHub" />
                  <p className='max-md:text-[20px]'>Mongo DB</p>
                  </div>


                  <div className='shadow-md shadow-[#f582ff] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={node} alt="GitHub" />
                  <p className='max-md:text-[20px]'>Node js</p>
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default Skills
