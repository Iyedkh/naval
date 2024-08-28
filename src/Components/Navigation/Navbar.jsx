import React, { useState } from "react";
import Icon from "../../images/level.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import profileImage from '../../images/profile.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-gray-900 fixed px-2  sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400">
        {/* dektop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              Egt Naval Services
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-2 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-white/70" />
            </button>
          </div>
        </div>

        {/* desktop nav end */}
        <div className={`${open ? null : "hidden"} h-[19rem]`}>
          <ul>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 pt-6">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
