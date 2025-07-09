import React from 'react'
import BannerImg from '../assets/banner.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center w-full py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:p-1 gap-6 items-center'>
          <div data-aos="zoom-in">
            <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src={BannerImg} alt="Banner Img" />
          </div>
          <div className='flex flex-col justify-center mx-4 gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Summer Sale Upto 80% off</h1>
            <p data-aos='fade-up' className='text-sm text-gray-500 tracking-wide leading-5'>Our amazing Summer Sale is live! Enjoy up to 80% off on your favorite products. Don’t miss this limited-time offer—shop now and save big this season!
              It’s the biggest sale of the season!
              Enjoy huge discounts on fashion, electronics, home decor, and more.
              Top brands at unbeatable prices.
              Limited stock and limited time – hurry up!
              Don’t miss your chance to save big.
              Shop now and celebrate summer in style!
            </p>
            <div className='flex flex-wrap sm:flex-col  gap-4'>
              <div data-aos='fade-left' className='flex items-center gap-4'><GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200 dark:bg-violet-400' />
                <p>Quality Products</p></div>
                <div data-aos="fade-left" className='flex items-center gap-4'>
                  <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-300'/>
                  <p className=''>Fast Delivery</p>
                </div>
                <div data-aos="fade-left" className='flex items-center gap-4'>
                  <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-400'/>
                  <p className=''>Easy Payment Methods</p>
                </div>
                <div data-aos="fade-left" className='flex items-center gap-4'>
                  <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-300'/>
                  <p className=''>Get Offers</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner