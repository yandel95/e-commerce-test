import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  const [atEnd, setAtEnd] = useState(false);
  const [atBeginning, setAtBeginning] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => {
      setAtEnd(swiper.isEnd);
      setAtBeginning(swiper.isBeginning);
    };

    updateNavigationState();

    swiper.on("slideChange", updateNavigationState);

    return () => {
      swiper.off("slideChange", updateNavigationState);
    };
  }, [swiper]);

  return (
    <div className="swiper-nav-button mt-8 mb-8 flex space-x-2">
      <button
        className={`swiper-nav-btn ${
          atBeginning ? "swiper-nav-btn-inactive" : ""
        }`}
        onClick={() => swiper.slidePrev()}
        disabled={atBeginning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        className={`swiper-nav-btn ${atEnd ? "swiper-nav-btn-inactive" : ""}`}
        onClick={() => swiper.slideNext()}
        disabled={atEnd}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavButton;
