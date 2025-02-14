import React from 'react'
import netflix from '../assets/Netflix.png';
import amazon from '../assets/Amazon.png';
import spotify from '../assets/Spotify.png';
import todoimg from '../assets/TODOIMG.png';
import rockimg from '../assets/rockgame.png';
import tictacimg from '../assets/tictac.png';
import passwordimg from '../assets/password.png'
import currency from '../assets/currency.png'

const Work = () => {
    return (
        <div name="work" className='w-full  py-[100px] md:pt-[50px]  text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6 max-sm:text-[25px]'>Check out some of my recent work .</p>
                </div>

                

                <div className='flex  w-full '>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8 '>
                        <div className='  w-80     '>
                            <img className='w-60  h-60 mx-9 hover:scale-110 duration-500' src={netflix} alt="Netflix" />
                            <a className='  cursor-pointer hover:border-b-4 duration-150  text-gray-300 border-pink-300 text-2xl ' href='https://github.com/12virendra/Netflix-clone' target='_main'>Netflix clone </a>
                            <a className=' mx-11 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://timely-wisp-f72664.netlify.app/">LIVE</a>

                        </div>
                        <div className='  w-80 max-sm:w-[294px] '>
                            <img className='w-60  h-60 mx-11 hover:scale-110 duration-500' src={amazon} alt="amazon" />
                            <a className=' mx-5 cursor-pointer hover:border-b-4 duration-150 text-gray-300 border-pink-300 text-2xl ' href='https://github.com/12virendra/Amazon-clone' target='_main'>Amazon clone </a>
                            <a className=' mx-5 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://stalwart-ganache-d930fc.netlify.app/">LIVE</a>

                        </div>
                        <div className='  w-80  max-sm:w-[299px]   '>
                            <img className='w-[235px]  h-60 mx-14 hover:scale-110 duration-500' src={spotify} alt="spotify" />
                            <a className=' mx-5 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href='https://github.com/12virendra/spotify-clone' target='_main'>Spotify clone </a>
                            <a className=' mx-5 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://sweet-sable-858bd7.netlify.app/">LIVE</a>
                        </div> 
                        

                        <div className='  w-80  max-sm:w-[299px]   '>
                            <img className='w-[230px]  h-[230px] mx-14 hover:scale-110 duration-500' src={todoimg} alt="Todo " />
                            <a className=' mx-5 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href='https://github.com/12virendra/Todo-List ' target='_main'>Todo App </a>
                            <a className=' mx-11 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://todo-list-indol-theta-77.vercel.app/">LIVE</a>
                        </div>

                        <div className='  w-80  max-sm:w-[299px]   '>
                            <img className='w-[235px]  h-60 mx-14 hover:scale-110 duration-500' src={rockimg} alt="Rock paper scissor" />
                            <a className=' mx-0 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href='https://github.com/12virendra/rock-paper-game' target='_main'>Rock-Paper- Scissor</a>
                            <a className=' ml-10 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://harmonious-panda-34a0f7.netlify.app/">LIVE</a>
                        </div>

                        <div className='  w-80  max-sm:w-[299px]   '>
                            <img className='w-[235px]  h-60 mx-14 hover:scale-110 duration-500' src={tictacimg} alt="tic tac toe" />
                            <a className=' mx-5 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href=' https://github.com/12virendra/Tic-tac-toe' target='_main'>Tic-tac-toe </a>
                            <a className=' mx-11 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://chic-torte-d639d8.netlify.app/">LIVE</a>
                        </div>

                        <div className='  w-80  max-sm:w-[299px]   '>
                            <img className='w-[235px]  h-60 mx-14 hover:scale-110 duration-500' src={passwordimg} alt="password" />
                            <a className=' mx-0 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href=' https://github.com/12virendra/Password-generator' target='_main'>Password-Generator-App </a>
                            <a className=' ml-5 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://password-generator-opal-kappa.vercel.app/" target=''>LIVE</a>
                        </div>

                        <div className='  w-80  max-sm:w-[299px]   '>
                            <img className='w-[235px]  h-60 mx-14 hover:scale-110 duration-500' src={currency} alt="currency" />
                            <a className=' mx-0 cursor-pointer hover:border-b-4 duration-500 text-gray-300 border-pink-300  text-2xl ' href='https://github.com/12virendra/Currency-Converter' target='_main'>Currency Converter </a>
                            <a className=' ml-5 cursor-pointer hover:border-b-4 duration-500 text-pink-300 border-pink-300  text-lg ' href="https://currency-converter-nine-orpin.vercel.app/" target=''>LIVE</a>
                        </div>

                    </div>


                </div>
            </div>
        </div>



    )
}

export default Work
