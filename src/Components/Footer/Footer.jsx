import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                {t('company_name')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('footer_description')}
            </p>
            {/* Social Links */}
            
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t('company_info_title')}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-200 mb-1">
                  {t('registered_office')}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('registered_office_address')}
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-200 mb-1">
                  {t('operational_headquarters')}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('operational_headquarters_address')}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">{t('phone_number')}</p>
                <p className="text-gray-400 text-sm">{t('cell_number')}</p>
                <p className="text-blue-400 text-sm hover:text-blue-300 transition-colors cursor-pointer">
                  contact@egtnavalservices.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/about", label: t('about') },
                { path: "/services", label: t('serv') },
                { path: "/contact", label: t('cont') }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer_rights_reserved')}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}

export default Footer;