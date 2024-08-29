import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import heroImage from '../../images/kokeshi-9DLoHFsfi3g-unsplash.jpg';
import heroImage2 from '../../images/nopparuj-lamaikul-K0UZ0dxFaDk-unsplash.jpg';
import heroImage3 from '../../images/vidar-nordli-mathisen-GsuPuCpVcN4-unsplash.jpg';
import Stars from '../../images/stars.png';
import { motion } from 'framer-motion';

const Herosection = () => {
  return (
    <div className="font-poppins overflow-x-hidden relative">
      <div className="relative bg-[#e0e0e0]">
        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={1500} // Adjusts the speed of the transition in milliseconds
          className="h-[80vh] w-full"
        >
          <SwiperSlide>
            <img
              src={heroImage}
              alt="hero1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={heroImage2}
              alt="hero2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={heroImage3}
              alt="hero3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        {/* Text Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-10">
          <div className="max-w-4xl text-center bg-black bg-opacity-50 p-8 rounded-lg">
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600 font-bold leading-snug text-2xl sm:text-4xl lg:text-6xl mb-3">
                Expert Naval Maintenance & Repair
                <br />
                <span className="sm:text-4xl lg:text-6xl text-3xl">
                  Keeping Your Fleet in Top Condition
                </span>
              </h1>
              <p className="text-white text-sm sm:text-base mb-8 max-w-[480px] mx-auto">
                Welcome to our company, where we specialize in the maintenance and repair of naval vessels. We are dedicated to ensuring that your fleet remains seaworthy, reliable, and ready for any mission. Trust us to keep your ships in optimal condition with expert service and commitment to excellence.
              </p>
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1 }}
            >
              
            </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Herosection;
