import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroImage from '../../images/kokeshi-9DLoHFsfi3g-unsplash.jpg';
import heroImage2 from '../../images/nopparuj-lamaikul-K0UZ0dxFaDk-unsplash.jpg';
import heroImage3 from '../../images/4-1024x684.jpeg';
import { useMediaQuery } from 'react-responsive';

const Slides = ({ slideHeight = '500px' }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Service",
      description: "Professional naval services and solutions",
      category: "Operations"
    },
    {
      image: heroImage2,
      title: "Gallery",
      description: "Explore our work and achievements",
      category: "Portfolio"
    },
    {
      image: heroImage3,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance and repair services",
      category: "Services"
    }
  ];

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Clean Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
          Our Expertise
        </h2>
        <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
          Discover our comprehensive range of naval services and solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={isMobile ? 16 : 32}
          slidesPerView={isMobile ? 1.1 : 2.5}
          centeredSlides={isMobile}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !w-2 !h-2 !bg-gray-400 !opacity-50 hover:!opacity-100 transition-opacity duration-300"></span>`;
            }
          }}
          navigation={!isMobile}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={600}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ height: isMobile ? '400px' : slideHeight }}
              >
                {/* Image Container */}
                <div className="relative w-full h-2/3 overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Simple Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Minimal Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {slide.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white p-6 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {slide.description}
                  </p>
                  
                  {/* Simple CTA */}
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1 group/btn">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Active State Indicator */}
                {activeIndex === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Simple Progress Indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
            <span className="font-medium text-gray-900">
              {activeIndex + 1} / {slides.length}
            </span>
            <span className="text-gray-400">•</span>
            <span>{slides[activeIndex].title}</span>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex justify-center space-x-3 mt-6">
            <button className="swiper-button-prev-custom bg-white border border-gray-300 text-gray-600 p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom bg-white border border-gray-300 text-gray-600 p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <style >{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Slides;