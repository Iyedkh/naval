import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import heroImage from '../../images/kokeshi-9DLoHFsfi3g-unsplash.jpg';
import heroImage2 from '../../images/nopparuj-lamaikul-K0UZ0dxFaDk-unsplash.jpg';
import heroImage3 from '../../images/4-1024x684.jpeg';
import { useMediaQuery } from 'react-responsive';

const Slides = ({ slideHeight = '400px' }) => {
  // Media query to determine if the current viewport is mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const slideContent = (
    <>
      <SwiperSlide>
        <div className="relative" style={{ height: slideHeight }}>
          <img src={heroImage} alt="Service" className="w-full h-full object-cover" />
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            Service
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative" style={{ height: slideHeight }}>
          <img src={heroImage2} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            Gallery
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative" style={{ height: slideHeight }}>
          <img src={heroImage3} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
          Maintenance et Réparation
          </div>
        </div>
      </SwiperSlide>
    </>
  );

  return (
    <Swiper
      spaceBetween={16}
      breakpoints={{
        0: {
          slidesPerView: 1.5, // 1 and a half slides on small screens
        },
        768: {
          slidesPerView: 3, // 3 slides per view on desktops
        },
      }}
      pagination={{ clickable: true }}
      className="my-8 px-4"
    >
      {slideContent}
    </Swiper>
  );
};

export default Slides;
