import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[48px] flex justify-between items-center px-4 bg-[#25559e] text-gray-100">
          <div>
              <img  src={Logo} alt="logo image" style={{width:'50px' }} />
          </div>
          {/* menu */}
              <ul className=' hidden md:flex  text-[20px]'>
        <li className='hover:border-b-2 border-pink-500'>
          <Link to="Hero" smooth={true} duration={500} >
             Home
        </Link>
        </li>
        
        <li className='hover:border-b-2 border-pink-500'>
          <Link to="about"  smooth={true} duration={500} >
             About
        </Link>
        </li>
        <li className='hover:border-b-2 border-pink-500'>
        <Link to="skills" smooth={true} duration={500} >
             Skills
        </Link>
          </li>
        <li className='hover:border-b-2 border-pink-500 '>
        <Link to="work" smooth={true} duration={500} >
             Work
        </Link>
                  </li>
        <li className='hover:border-b-2 border-pink-500 '>
        <Link to="contact" smooth={true} duration={500} >
             Contact
        </Link>
                  </li>
              
              </ul>

          {/* menue icon */}
          <div onClick={handleClick}  className='md:hidden  z-10'>
            {!nav?   <FaBars/>:<FaTimes/>}
          </div>

          {/* Mobile menu */}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="Hero" smooth={true} duration={500} >
             Home
        </Link></li>
        <li className="py-6 text-3xl">
        <Link onClick={handleClick} to="about"  smooth={true} duration={500} >
             About
        </Link>
                  </li>
        <li className="py-6 text-3xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
             Skills
        </Link>
                  </li>
        <li className="py-6 text-3xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500} >
             Work
        </Link>
                  </li>
        <li className="py-6 text-3xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
             Contact
        </Link>
                  </li>
          </ul>

          {/* Social icons */}
      <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-8px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.linkedin.com/in/virendra-kaira-a070332bb/">
              Linkedin<FaLinkedin size={40}  />
            </a>
          </li>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://github.com/12virendra">
              GitHub<FaGithub size={40} />
            </a>
          </li>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-300 bg-orange-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="mailto:virendrakaira60@gmail.com ">
              Email< HiOutlineMail size={40} />
            </a>
          </li>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-300 bg-[#24557e]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://docs.google.com/document/d/1yhfo4vCH287PZbVwaSwABCnABbOWG5-efZ9sBY2474g/edit#heading=h.jsbxkznmn7nr">
            Resume< BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
          </div>
    </div>
  )
}

export default Navbar
