import React from 'react';
import heroImage from '../../images/kokeshi-9DLoHFsfi3g-unsplash.jpg';
import heroImage2 from '../../images/nopparuj-lamaikul-K0UZ0dxFaDk-unsplash.jpg';

const Slides = ({ slideHeight = '400px', slideWidth = '30%' }) => {
  return (
    <div className="flex justify-around my-8 px-8 space-x-4">
      <div className="text-center" style={{ width: slideWidth }}>
        <div className="relative" style={{ height: slideHeight }}>
          <img src={heroImage} alt="Service" className="w-full h-full object-cover" />
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            Service
          </div>
        </div>
      </div>
      <div className="text-center" style={{ width: slideWidth }}>
        <div className="relative" style={{ height: slideHeight }}>
          <img src={heroImage2} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            Gallery
          </div>
        </div>
      </div>
      <div className="text-center" style={{ width: slideWidth }}>
        <div className="relative" style={{ height: slideHeight }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/videoid" // Replace 'videoid' with your video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            Naval EGT Spot
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
