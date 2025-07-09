import { useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from '../../Components/Banner';
import Navbar from '../../Components/Navbar';
import Hero from '../../Components/Hero';
import Products from '../../Components/Products';
import TopProducts from '../../Components/TopProducts';
import Subscribe from '../../Components/Subscribe';
import Testimonial from '../../Components/Testimonial';
import Footer from '../../Components/Footer'


function App() {
  const [orderPopup,setOrderPopup] = useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  };

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[])
  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white w-full justify-items-center overflow-x-hidden duration-200 select-none'>
      <Navbar handleOrderPopup={handleOrderPopup} className='fixed'/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>
      
    </div>
    </>
  )
}

export default App
