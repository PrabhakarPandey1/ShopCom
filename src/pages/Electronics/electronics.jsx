import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const OurItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch(
                    "https://dummyjson.com/products/category/mobile-accessories"
                );
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
            <div className="relative z-40 w-full bg-[#f9f9f9] px-4">
                <div className="max-w-6xl mx-auto py-10">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <p
                            data-aos="fade-right"
                            className="text-sm text-blue-500 uppercase tracking-widest"
                        >
                            Our Exclusive Collection
                        </p>
                        <h1 data-aos="fade-left" className="text-4xl font-bold mb-2">
                            Our Items
                        </h1>
                        <p
                            data-aos="fade-right"
                            className="text-sm text-gray-600 dark:text-gray-400"
                        >
                            Top-rated products across various categories
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-[220px] min-w-0"
                            >
                                <div className="overflow-hidden rounded-md mb-3">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-semibold text-base mb-1 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300 capitalize mb-2">
                                    {item.category}
                                </p>
                                <div className="flex items-center justify-center gap-1">
                                    <FaStar className="text-amber-400 flex-shrink-0" />
                                    <span className="text-sm">{item.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurItems;
