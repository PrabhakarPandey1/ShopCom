import React from 'react';
import Image1 from '../assets/hero/women.png';
import Image2 from '../assets/hero/shopping.png';
import Image3 from '../assets/hero/sale.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 80% off on all Women's Wear",
    description:
      'Revamp your wardrobe with up to 80% off on all women’s wear! From trendy tops to elegant dresses, grab your favorites at unbeatable prices. Limited time only!',
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all Men's Wear",
    description:
      'Get up to 30% off on all men’s wear! Explore the latest trends and give your wardrobe a stylish upgrade without breaking the bank.',
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 60% off on Product Sale",
    description:
      'Enjoy massive savings with up to 60% off on our exclusive sale! Don’t miss out—shop your favorite styles now.',
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden max-w-[1440px] mx-auto min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-slate-900 dark:text-white duration-300">
      <div className="px-4 sm:px-10 lg:px-20 py-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left sm:justify-between gap-10 sm:gap-20 min-h-[500px] sm:min-h-[600px]">
                
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center items-center sm:items-start" data-aos="fade-right">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                    {data.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-blue-600 to-green-500 hover:scale-105 transition-transform duration-300 text-white text-sm sm:text-base font-medium py-2.5 px-6 rounded-full shadow-md"
                  >
                    Order Now
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center" data-aos="fade-left">
                  <img
                    src={data.img}
                    alt="Slide Visual"
                    className="w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] object-contain transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
