import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
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
  const { t } = useTranslation(); // Use the hook

  return (
    <div className="font-poppins overflow-x-hidden relative">
      <div className="relative bg-gray-200">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={1500}
          className="h-[100vh] w-full"
        >
          <SwiperSlide>
            <img src={heroImage} alt="Naval ship in the ocean" className="w-full h-full object-cover" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage2} alt="Ship maintenance crew" className="w-full h-full object-cover" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage3} alt="Docked ship at sunset" className="w-full h-full object-cover" loading="lazy" />
          </SwiperSlide>
        </Swiper>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-10">
          <div className="max-w-5xl text-center bg-black bg-opacity-60 p-8 sm:p-2 rounded-lg shadow-xl">
            <motion.div
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Icon}
                  alt="Company logo"
                  className="h-32 w-32 sm:h-96 sm:w-96 mb-4" // Adjust sizes and keep margin if needed
                />
                {/* Keep h1 and p elements below the logo */}
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-bold leading-snug text-2xl sm:text-3xl lg:text-4xl xl:text-3xl mb-4">
                  {t('expert_naval')}
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl">
                    {t('keeping_fleet')}
                  </span>
                </h1>
                <p className="text-white text-xs sm:text-base lg:text-lg max-w-[600px] mx-auto">
                  {t('description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
