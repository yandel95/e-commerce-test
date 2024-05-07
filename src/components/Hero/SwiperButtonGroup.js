import React from "react";

const SwiperButtonGroup = () => {
  return (
    <div className="swiper-button-group flex mx-auto pt-4 gap-4">
      <button className="swiper-btn-group-active transition-colors duration-150 rounded-lg focus:shadow-outline flex items-center">
        <span className="mr-3">SHOP NOW</span>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M0 1.3281L1.22022 0L8 7.42836L1.21337 14.8567L0 13.5286L5.57326 7.42836L0 1.3281Z"></path>
        </svg>
      </button>
      <button className="swiper-btn-group transition-colors duration-150 rounded-lg focus:shadow-outline flex items-center">
        <span>TAKE THE QUIZ</span>
        <svg className="hidden sm:block w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
          <path d="M0 1.3281L1.22022 0L8 7.42836L1.21337 14.8567L0 13.5286L5.57326 7.42836L0 1.3281Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SwiperButtonGroup;
