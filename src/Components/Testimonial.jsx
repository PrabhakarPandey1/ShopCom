import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        id: 1,
        name: "Mukesh Kumar",
        text: "Impressed with both the selection and the service. The quality exceeded my expectations and delivery was quick. Will definitely shop again!",
        img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        name: "Amisha Kaur",
        text: "Absolutely love the styles they offer. The fit is perfect and the designs are super trendy. Highly recommended for fashion lovers!",
        img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        name: "Lusi Alana",
        text: "Fantastic experience from start to finish. Great customer service, fast shipping, and the clothes are even better in person!",
        img: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <div className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-12" data-aos="fade-up">
                    What Our Customers Say
                </h2>
                <Slider {...settings}>
                    {TestimonialData.map((item) => (
                        <div key={item.id} className="p-6 sm:px-10">
                            <div
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-6 py-8 max-w-2xl mx-auto"
                                data-aos="zoom-in"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-full border-4 border-blue-500 mx-auto mb-6 object-cover shadow-lg"
                                />
                                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg italic mb-4">
                                    “{item.text}”
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Testimonial;
