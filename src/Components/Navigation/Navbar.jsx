import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation(); // Get i18n object

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.className = lng === 'ar' ? 'rtl' : ''; // Add RTL support for Arabic
  };

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-gray-900 fixed px-2 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400">
        {/* Desktop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              Egt Naval Services
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/">{i18n.t('Home')}</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/about">{i18n.t('About')}</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/services">{i18n.t('Services')}</Link>
              </li>
              <li className="p-2 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/contact">{i18n.t('Contact')}</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            {/* Language Switcher Buttons */}
            <button onClick={() => changeLanguage('en')} className="text-white mx-1">
              EN
            </button>
            <button onClick={() => changeLanguage('fr')} className="text-white mx-1">
              FR
            </button>
            <button onClick={() => changeLanguage('ar')} className="text-white mx-1">
              AR
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-white/70" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`${open ? null : "hidden"} h-[19rem]`}>
          <ul>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 pt-6">
              <Link to="/">{i18n.t('Home')}</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/about">{i18n.t('About')}</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/services">{i18n.t('Services')}</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/contact">{i18n.t('Contact')}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
