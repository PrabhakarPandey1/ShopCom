import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import Navbar from '../../Components/Navbar';

const OurItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data); // Add this line
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
            <div className="mt-10 mb-12 w-full">
                <div className="container flex-col flex justify-center p-[5%]">
                    <div className="text-center mb-2.5 max-w-[600px] mx-auto">
                        <p className="text-sm text-blue-500">Our Exclusive Collection</p>
                        <h1 className="text-3xl font-bold">Our Items</h1>
                        <p className="text-xs text-gray-400">Top-rated products across various categories</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4">
                        {items.map((item, index) => (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100} className="space-y-3">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="h-[250px] w-[200px] object-cover rounded-md hover:scale-105 transition-transform duration-200"
                                />
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.category}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-amber-400" />
                                        <span>{item.rating}</span>
                                    </div>
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
