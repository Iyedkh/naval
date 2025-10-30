import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import heroImage from '../../images/kokeshi-9DLoHFsfi3g-unsplash.jpg';
import heroImage2 from '../../images/nopparuj-lamaikul-K0UZ0dxFaDk-unsplash.jpg';
import heroImage3 from '../../images/vidar-nordli-mathisen-GsuPuCpVcN4-unsplash.jpg';
import { motion } from 'framer-motion';
import Icon from "../../images/logo.png";

const Herosection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="font-poppins overflow-x-hidden relative">
      <div className="relative bg-gray-900">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500 !w-8'
          }}
          loop={true}
          speed={1200}
          className="h-screen w-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img 
                src={heroImage} 
                alt="Naval ship in the ocean" 
                className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out" 
                loading="eager" 
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img 
                src={heroImage2} 
                alt="Ship maintenance crew" 
                className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img 
                src={heroImage3} 
                alt="Docked ship at sunset" 
                className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Hero Content */}
        <div className="absolute inset-0 mt-12 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl w-full text-center"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl mx-auto max-w-4xl">
              {/* Logo */}
              <motion.div
                variants={logoVariants}
                className="flex justify-center mb-6 sm:mb-8"
              >
                <div className="relative">
                  <img
                    src={Icon}
                    alt="Company logo"
                    className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 filter drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full blur-sm"></div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 sm:space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                    {t('expert_naval')}
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mt-2 block">
                    {t('keeping_fleet')}
                  </span>
                </h1>

                <motion.p 
                  variants={itemVariants}
                  className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                >
                  {t('description')}
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="mt-8 sm:mt-10 lg:mt-12"
              >
                <button className="group relative bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 sm:py-4 sm:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden">
                  <span className="relative z-10">
                    Learn More
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/80 text-sm font-light">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;