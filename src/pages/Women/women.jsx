import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import Navbar from '../../Components/Navbar';

const OurItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/category/womens-dresses");
        const data = await res.json();
        setItems(data.products);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className='relative z-40 w-full'>

        <div className="max-w-6xl py-8 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 max-w-xl mx-auto">
            <p data-aos="fade-right" className="text-sm text-pink-500">
              Elegant & Stylish
            </p>
            <h1 data-aos="fade-left" className="text-3xl font-bold">
              Women's Wear
            </h1>
            <p data-aos="fade-right" className="text-xs text-gray-600 dark:text-gray-400">
              Explore our latest collection of women's fashion
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center w-[220px]"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-[220px] w-full object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.category}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <FaStar className="text-amber-400" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurItems;
