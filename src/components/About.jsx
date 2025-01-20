import React from 'react'

const About = () => {
  return (
      <div name="about" className='h-screen w-full bg-[#0a192f] text-gray-300 '>
          <div className="flex flex-col justify-center items-center w-full h-full">
              <div className='max-w-[1000px] w-full grid grid-col-2 gap-8'>
                  <div className='lg:text-right pb-8 pl-4 pt-[200px] '>
                      <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                          About
                  </p>
                  </div>
                  <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid bg-[#0a192f] sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                      <p>Hi, I'm Virendra , nice to meet you. Please take a look around.</p>
                  </div>
                  <div className="max-lg:text-[19px]">
                      <p>I am a passionate and dedicated front-end developer with a strong foundation in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React. Over the past few years, I have honed my skills by building and deploying various web projects, ranging from dynamic single-page applications to full-fledged e-commerce platforms. Some of my notable projects include an Amazon clone, a Netflix clone, and a Spotify clone, as well as interactive mini-games like Tic Tac Toe, Rock Paper Scissors, and a Car Game.</p>
                  </div>
                </div>    
             </div>    
        </div>
      
    
  )
}

export default About
