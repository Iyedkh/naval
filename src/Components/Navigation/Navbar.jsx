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
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px] "
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              LevelUp Solutions
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
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white hidden sm:block rounded-xl mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
            <button
              type="button"
              className="hidden sm:block text-white border font-medium rounded-lg ml-2 text-sm px-4 hover:bg-blue-300/10 mr-4"
            >
              Login
            </button>
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
          {/* profile section */}
          <div className="bg-gray-200/50 h-[1px] w-[85%] ml-[-10px]">
            <div className="flex cursor-pointer">
              <img
                src={profileImage}
                alt="profileimg"
                className="w-14 ml-8 mt-4 flex"
              />
              <p className="my-auto ml-4 text-white font-semibold">Sam</p>
              <p className="my-auto ml-2 text-white font-semibold">Smith</p>
            </div>
            <p className="my-auto ml-[103px] mt-[-27px] text-xs font-light text-gray-200/60">
              Samsmith@email.com
            </p>
          </div>
          <div className="flex justify-end">
            <div className="mt-[6%] mr-4">
              <button className="text-white font-semibold border rounded-xl py-2 px-4 hover:bg-gray-100/20">
                Logout
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="mt-[25px] text-gray-100/30 text-sm">All Rights Reserved - LevelUP Solutions</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
