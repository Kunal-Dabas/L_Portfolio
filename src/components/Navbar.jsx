import React, { useState } from "react";
import { Link } from "react-scroll";

import {
  FaBars,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from "../assets/Kunal_logo.jpeg";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => {
    setnav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#061337] text-[#fcd34d]">
      <div>
        <img
          src={logo}
          alt="logo img"
          style={{ width: "70px", borderRadius: "50%" }}
        />
      </div>
      <ul className="hidden md:flex">
        {/* REACT SMOOTH SCROLL  */}
        <li><Link activeClass="active" to="home" smooth={true} offset={50} duration={500} >
          Home
        </Link></li>
        <li><Link activeClass="active" to="about" smooth={true} offset={50} duration={500} >
          About
        </Link></li>
        <li><Link activeClass="active" to="skills" smooth={true} offset={50} duration={500} >
          Skills
        </Link></li>
        <li><Link activeClass="active" to="work" smooth={true} offset={50} duration={500} >
          Work
        </Link></li>
        <li><Link activeClass="active" to="contact" smooth={true} offset={50} duration={500} >
          Contact Me
        </Link></li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <AiOutlineClose />}
      </div>

      {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl"><Link onClick={handleClick} activeClass="active" to="home" smooth={true} offset={50} duration={500} >
          Home
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} activeClass="active" to="about" smooth={true} offset={50} duration={500} >
          About
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} activeClass="active" to="skills" smooth={true} offset={50} duration={500} >
          Skills
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} activeClass="active" to="work" smooth={true} offset={50} duration={500} >
          Work
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} offset={50} duration={500} >
          Contact Me
        </Link></li>
        </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-sky-500 duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kunal-dabas-wreck4tech/" target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#525252] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/kunal-dabas" target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#0d9488] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:kunal.dabas2003@gmail.com" target="_blank" rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#292524] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1CcRnw2nez8pt4aQyaY7gYsmpUyjAJOef/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
