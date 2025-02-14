import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[48px] flex justify-between items-center px-4 bg-[#25559e] text-gray-100">
      <div>
        <img src={Logo} alt="logo" style={{ width: '50px' }} />
      </div>
      {/* menu */}
      <ul className=' hidden md:flex  text-[20px]'>
        <li className='hover:border-b-2 border-pink-500'>
          <Link to="Hero" smooth={true} duration={500} >
            Home
          </Link>
        </li>

        <li className='hover:border-b-2 border-pink-500'>
          <Link to="about" smooth={true} duration={500} >
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
      <div onClick={handleClick} className='md:hidden  z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-3xl hover:border-b-[2px] border-pink-500">
          <Link onClick={handleClick} to="Hero" smooth={true} duration={500} >
            Home
          </Link></li>
        <li className="py-6 text-3xl hover:border-b-[2px] border-pink-500 ">
          <Link onClick={handleClick} to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li className="py-6 text-3xl hover:border-b-[2px] border-pink-500 ">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl hover:border-b-[2px] border-pink-500 ">
          <Link onClick={handleClick} to="work" smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl hover:border-b-[2px] border-pink-500 ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
          <ul className=' flex flex-row'>
        <li className='w-[60px] h-[50px] flex justify-between items-center  duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.linkedin.com/in/virendra-kaira-a070332bb/">
              <FaLinkedin size={50} />
            </a>
          </li>

          <li className='w-[60px] h-[50px] flex mx-4 justify-between items-center  duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://github.com/12virendra">
              <FaGithub size={50} />
            </a>
          </li>

          <li className='w-[60px] h-[50px] flex justify-between mr-4 items-center   duration-300 bg-orange-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="mailto:virendrakaira60@gmail.com ">
              < HiOutlineMail size={50} />
            </a>
          </li>

          <li className='w-[60px] h-[50px] flex justify-between items-center    duration-300 bg-[#24557e]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.canva.com/design/DAGPnArTNQY/x5O--3KXyhF_Haa3vqSaPw/edit?utm_content=DAGPnArTNQY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              < BsFillPersonLinesFill size={50} />
            </a>
          </li>


          </ul>
      </ul>

      {/* Social icons */}
      <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-8px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.linkedin.com/in/virendra-kaira-a070332bb/">
              Linkedin<FaLinkedin size={40} />
            </a>
          </li>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-8px]  duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://github.com/12virendra">
              GitHub<FaGithub size={40} />
            </a>
          </li>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-8px]  duration-300 bg-orange-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="mailto:virendrakaira60@gmail.com ">
              Email< HiOutlineMail size={40} />
            </a>
          </li>
          <li className='w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[-8px]  duration-300 bg-[#24557e]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://drive.google.com/file/d/1Sm5w5Pl0ZklW3axFY0ZIeO2YpmrFMk2C/view?usp=drive_link">
              Resume< BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>



    </div>
  )
}

export default Navbar
