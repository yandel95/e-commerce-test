import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image from "../../assets/images/hero/hero-1.jpg";
import person1 from "../../assets/images/image-hero/person-1.jpg";
import person2 from "../../assets/images/image-hero/person-2.jpg";
import person3 from "../../assets/images/image-hero/person-3.jpg";
import SwiperNavButton from "./SwiperNavButton";
import SwiperButtonGroup from "./SwiperButtonGroup";

const Hero = () => {
  const items = [
    {
      src: image,
      image: person1,
      title: "Lorem ipsum dolor sit amet",
      subtitle:
        "Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.",
    },
    {
      src: image,
      image: person2,
      title: "Pellentesque sit amet dui",
      subtitle:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: image,
      image: person3,
      title: "Fusce at urna sapien",
      subtitle:
        "Vestibulum vel viverra arcu. Donec auctor, ipsum eget sollicitudin convallis.",
    },
  ];

  return (
    <Swiper modules={[Navigation, Pagination, A11y]} slidesPerView="auto">
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="object-center bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${item.src})`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-around md:items-center">
              <div className="mt-4 md:mt-0 order-2 md:order-1">
                <div className="bg-swiper-title mx-auto mt-4">{item.title}</div>
                <div className="bg-swiper-subtitle pt-4 hidden sm:block">
                  {item.subtitle}
                </div>
                <SwiperButtonGroup />
                <SwiperNavButton />
              </div>
              <div className="mt-4 md:mt-0 order-1 md:order-2">
                <div className="max-w-xs overflow-hidden rounded-lg shadow-lg mt-8 mb-8">
                  <img
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
