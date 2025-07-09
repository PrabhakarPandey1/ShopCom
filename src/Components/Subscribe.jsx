import React from 'react';

function Subscribe() {
  return (
    <div
      data-aos="fade-up"
      className="w-full bg-slate-700 dark:bg-gray-800 text-white py-12"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
            Stay Updated With Our Latest Product Launches
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            Subscribe to our newsletter for exclusive deals, fresh arrivals, and
            shopping tips.
          </p>

          <form
            data-aos="fade-left"
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] md:w-[400px] p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm sm:text-base transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
