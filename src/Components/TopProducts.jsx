import React from 'react';
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Discover a fresh take on everyday fashion with our curated collection of casual wear. Whether you're running errands, meeting friends, or just relaxing at home, our stylish yet comfortable outfits are designed to keep you looking great and feeling even better.",
  },
  {
    id: 2,
    img: Img2,
    title: "Modern Wear",
    description:
      "Modern Fashion for the Bold and Confident. Step into the now with our exclusive line of modern wear—where clean lines, smart fits, and cutting-edge trends come together.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Wear",
    description:
      "Empowering Style for Every Woman. Discover a world of fashion made for you. Our women's wear collection is a celebration of confidence, elegance, and individuality.",
  },
];

function TopProducts({ handleOrderPopup }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10 sm:px-10">
      <div className="text-center mb-12">
        <p data-aos="fade-right" className="text-sm font-medium text-cyan-500 uppercase tracking-wide">
          Top Rated Products For You
        </p>
        <h1 data-aos="fade-right" className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-4">
          Our Best Products
        </h1>
        <p
          data-aos="fade-right"
          className="text-sm sm:text-base text-gray-500 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed pb-5"
        >
          Handpicked by our customers and loved by fashion-forward women everywhere — these are the styles that never go out of trend. From bestselling dresses to must-have tops, timeless jeans, and essential accessories, our Best Products collection showcases the pieces everyone’s talking about.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 place-items-center">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue-600 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            <img
              src={data.img}
              alt="Product"
              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-150 duration-300 drop-shadow-md"
            />
            <div className="w-full flex items-center justify-center gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <h2 className="text-xl font-bold mt-2">{data.title}</h2>
            <p className="text-gray-500 group-hover:text-white duration-300 text-sm px-4 line-clamp-2">
              {data.description}
            </p>
            <button
              onClick={handleOrderPopup}
              className="bg-blue-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-blue-500 mx-auto block mb-5"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
