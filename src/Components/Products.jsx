import React, { useState } from 'react';
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import Img5 from "../assets/women/women5.jpg";
import Img6 from "../assets/women/women6.jpg";
import Img7 from "../assets/women/women7.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    { id: 1, img: Img1, title: "Women Culture", rating: 5.0, color: "purple", aosDelay: "0" },
    { id: 2, img: Img2, title: "Women Western", rating: 4.8, color: "red", aosDelay: "200" },
    { id: 3, img: Img3, title: "Googles", rating: 4.0, color: "green", aosDelay: "400" },
    { id: 4, img: Img4, title: "Women Culture", rating: 4.6, color: "brown", aosDelay: "600" },
    { id: 5, img: Img5, title: "Women fashion", rating: 4.1, color: "blue", aosDelay: "700" },
    { id: 6, img: Img6, title: "Women Style", rating: 4.3, color: "pink", aosDelay: "800" },
    { id: 7, img: Img7, title: "Women Trends", rating: 4.9, color: "violet", aosDelay: "900" },
];

function Products() {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(prev => !prev);
    };

    const displayedProducts = showAll ? ProductsData : ProductsData.slice(0, 5);

    return (
        <div className="container flex justify-center">
            <div className='p-[5%]'>
                <div className='text-center mb-2.5 max-w-[600px] mx-auto'>
                    <p data-aos="fade-right" className='text-sm text-blue-500'>Top Selling Products For You</p>
                    <h1 data-aos="fade-left" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-right" className='text-xs text-gray-400'>Elegant ethnic wear perfect for festive and traditional occasions</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4'>
                    {displayedProducts.map((data) => (
                        <div data-aos="fade-left" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                            <img src={data.img} alt="Cover" className='h-[250px] w-[200px] object-cover rounded-md bg-blue-300' />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-amber-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                    <button
                        onClick={handleToggle}
                        className='text-center mt-10 cursor-pointer bg-blue-500 text-white py-1 px-5 mb-2 rounded-md'
                    >
                        {showAll ? "Show Less" : "View All"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;
