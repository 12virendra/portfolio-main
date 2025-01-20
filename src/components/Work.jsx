import React from 'react'
import netflix from '../assets/Netflix.png';
import amazon from '../assets/Amazon.png';
import spotify from '../assets/Spotify.png';

const Work = () => {
  return (
      <div name="work" className='w-full  py-[100px]  md:h-screen text-gray-300 bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                  <p className='py-6'>Check out some of my recent work</p>
              </div>
            
              {/* make it responsive when you will see it after wards */}

              <div className='flex  w-full '>
              <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4 text-center py-8 '>
                  <div className='  w-80     '>
                   <img className='w-60  h-60 mx-9 hover:scale-110 duration-500' src={netflix} alt="Netflix" />
                      <a className='  cursor-pointer hover:border-b-4 duration-150  text-gray-300 border-pink-300 text-2xl ' href='https://github.com/12virendra/Netflix-clone'target='_main'>Netflix clone </a>
                      
                  </div>
                  <div className='  w-80 max-sm:w-[294px] '>
                   <img className='w-60  h-60 mx-11 hover:scale-110 duration-500' src={amazon} alt="amazon" />
                      <a className=' mx-6 cursor-pointer hover:border-b-4 duration-150 text-gray-300 border-pink-300 text-2xl ' href='https://github.com/12virendra/Amazon-clone'target='_main'>Amazon clone </a>
                      
                  </div>
                  <div className='  w-80  max-sm:w-[299px]   '>
                   <img className='w-[235px]  h-60 mx-14 hover:scale-110 duration-500' src={spotify} alt="spotify" />
                      <a className=' mx-11 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href='https://github.com/12virendra/spotify-clone'target='_main'>Spotify clone </a>
                      </div>
                      
                      </div>

                      
              </div>
              </div>
              </div>
        
      
    
  )
}

export default Work
