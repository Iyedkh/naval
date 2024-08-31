import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDribbbleSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins bg-gray-900">
      {/* Footer Top Section */}
      <div className="py-10 px-8 grid sm:grid-cols-2 gap-8">
        <div className="text-white">
          <h1 className="text-3xl font-bold cursor-pointer text-blue-400">
            EGT Services
          </h1>
          <p className="py-4 text-sm sm:text-base">
            EGT Services is your trusted partner in naval maintenance and repair.
            We offer comprehensive services including machinery repair, electrical systems,
            hull maintenance, and more. Our expert team is dedicated to ensuring your vessel's
            optimal performance and safety on the waters.
          </p>
          <div className="flex justify-start sm:justify-between my-6 space-x-4 text-blue-200">
            {/* Social Media Icons */}
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaDribbbleSquare size={30} className="cursor-pointer" />
            <FaInstagram size={30} className="cursor-pointer" />
            <FaGithubSquare size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Footer Top Section End */}

      {/* Company Info and Legal Links Section */}
      <div className="bg-[#2a2f3a] text-white py-10 px-8 grid gap-8 md:grid-cols-2">
        {/* Company Information */}
        <div>
          <h1 className="font-bold text-lg">NAVAL EGT Srl</h1>
          <p className="mt-2 font-semibold">Registered office:</p>
          <p>RES BABEL BLOC O APP 4 ETAGE 3 CITE EL GHAZALA 2083 Raoued (Arr) Tunisia</p>
          

          <p className="mt-4 font-semibold">Operational Headquarters:</p>
          <p>RES BABEL BLOC O APP 4 ETAGE 3 CITE EL GHAZALA 2083 Raoued (Arr) Tunisia</p>
         

          <p className="mt-4">Tel. +216 xx xxx xxx</p>
          <p>Cell. +216 xx xxx xxx</p>
          <p>info@yourdomain.com</p>
          
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-start md:items-start">
          <ul className="space-y-2 text-left md:text-left">
            <li className="underline cursor-pointer">
              <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
            </li>
            <li className="underline cursor-pointer">
              <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
            </li>
            <li className="underline cursor-pointer">
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Company Info and Legal Links Section End */}

      {/* Footer Bottom Section */}
      <div className="bg-[#2a2f3a] py-4">
        <div className="text-center text-gray-400 text-sm">
          All Rights Reserved 2023 - EGT Services
        </div>
      </div>
      {/* Footer Bottom Section End */}
    </div>
  );
}

export default Footer;
