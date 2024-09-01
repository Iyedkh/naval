import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDribbbleSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden max-w-screen font-poppins bg-gray-900">
      {/* Footer Top Section */}
      <div className="py-10 px-8 grid sm:grid-cols-2 gap-8">
        <div className="text-white">
          <h1 className="text-3xl font-bold cursor-pointer text-blue-400">
            {t('company_name')}
          </h1>
          <p className="py-4 text-sm sm:text-base">
            {t('footer_description')}
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
          <h1 className="font-bold text-lg">{t('company_info_title')}</h1>
          <p className="mt-2 font-semibold">{t('registered_office')}</p>
          <p>{t('registered_office_address')}</p>
          <p className="mt-4 font-semibold">{t('operational_headquarters')}</p>
          <p>{t('operational_headquarters_address')}</p>
          <p className="mt-4">{t('phone_number')}</p>
          <p>{t('cell_number')}</p>
          <p>{t('email_address')}</p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-start md:items-start">
          <ul className="space-y-2 text-left md:text-left">
            <li className="underline cursor-pointer">
              <a href="/about" className="hover:text-blue-400 transition-colors">
                {t('about')}
              </a>
            </li>
            <li className="underline cursor-pointer">
              <a href="/services" className="hover:text-blue-400 transition-colors">
                {t('serv')}
              </a>
            </li>
            <li className="underline cursor-pointer">
              <a href="/contact" className="hover:text-blue-400 transition-colors">
                {t('cont')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Company Info and Legal Links Section End */}

      {/* Footer Bottom Section */}
      <div className="bg-[#2a2f3a] py-4">
        <div className="text-center text-gray-400 text-sm">
          {t('footer_rights_reserved')}
        </div>
      </div>
      {/* Footer Bottom Section End */}
    </div>
  );
}

export default Footer;
