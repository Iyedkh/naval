import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import 'flag-icon-css/css/flag-icons.min.css'; // Import flag icons CSS
import Icon from "../../images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Get t function and i18n object

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.className = lng === 'ar' ? 'rtl' : ''; // Add RTL support for Arabic
  };

  return (
    <div className=" fixed max-w-screen overflow-x-hidden font-poppins z-20">
      <nav className="fixed bg-black px-4 py-3 sm:py-4 w-full z-20">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Icon} alt="icon" className="hidden sm:block h-20 w-24" /> {/* Increased size */}
            <span className="ml-2 text-white font-semibold text-lg">
               EGT Naval Services
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-blue-400 transition duration-300">
              {t('nav-home')}
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition duration-300">
              {t('nav-about')}
            </Link>
            <Link to="/services" className="text-white hover:text-blue-400 transition duration-300">
              {t('nav-services')}
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition duration-300">
              {t('nav-contact')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button onClick={() => changeLanguage('en')} className="focus:outline-none">
                <span className="flag-icon flag-icon-gb" title="English"></span>
              </button>
              <button onClick={() => changeLanguage('fr')} className="focus:outline-none">
                <span className="flag-icon flag-icon-fr" title="French"></span>
              </button>
              <button onClick={() => changeLanguage('ar')} className="focus:outline-none">
                <span className="flag-icon flag-icon-tn" title="Arabic"></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white focus:outline-none">
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-800">
            <ul className="flex flex-col items-center py-4">
              <li className="mb-2">
                <Link to="/" className="text-white hover:text-blue-400 transition duration-300" onClick={() => setOpen(false)}>
                  {t('nav-home')}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white hover:text-blue-400 transition duration-300" onClick={() => setOpen(false)}>
                  {t('nav-about')}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white hover:text-blue-400 transition duration-300" onClick={() => setOpen(false)}>
                  {t('nav-services')}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white hover:text-blue-400 transition duration-300" onClick={() => setOpen(false)}>
                  {t('nav-contact')}
                </Link>
              </li>
            </ul>

            {/* Mobile Language Switcher */}
            <div className="flex justify-center pb-4">
              <button onClick={() => changeLanguage('en')} className="mx-1 focus:outline-none">
                <span className="flag-icon flag-icon-gb" title="English"></span>
              </button>
              <button onClick={() => changeLanguage('fr')} className="mx-1 focus:outline-none">
                <span className="flag-icon flag-icon-fr" title="French"></span>
              </button>
              <button onClick={() => changeLanguage('ar')} className="mx-1 focus:outline-none">
                <span className="flag-icon flag-icon-tn" title="Arabic"></span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
