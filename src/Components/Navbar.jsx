import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Menu = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Our Items', link: '/pro' },
  { id: 3, name: 'Women Wear', link: '/Women' },
  { id: 4, name: 'Mens Wear', link: '/Mens' },
  { id: 5, name: 'Electronics', link: '/electronics' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-indigo-600 shadow-lg' : 'bg-indigo-400 shadow-md'
      }`}
    >
      <div className='mx-auto flex justify-between items-center px-4 sm:px-8 py-4 max-w-[1440px]'>
        <Link
          data-aos="fade-right"
          to='/'
          className='font-bold text-xl flex items-center gap-2 text-white'
        >
          <FiShoppingBag size={30} />
          ShopCom
        </Link>

        {/* Show Hamburger Icon up to 990px */}
        <div
          className='max-[990px]:block hidden text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu for >=991px */}
        <ul
          data-aos="fade-in"
          className='hidden min-[991px]:flex items-center gap-6 text-white'
        >
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className='px-4 hover:text-yellow-300 duration-200'
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className='hidden min-[991px]:flex items-center gap-4'>
          <Link
            data-aos="fade-left"
            to="/login"
            className='bg-white text-indigo-600 px-4 py-1 rounded-full font-semibold hover:bg-indigo-100 duration-200'
          >
            Login
          </Link>
          <Link
            data-aos="fade-left"
            to="/signup"
            className='bg-yellow-300 text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-400 duration-200'
          >
            SignUp
          </Link>
        </div>
      </div>

      {/* Mobile Menu for <=990px */}
      {menuOpen && (
        <div className='max-[990px]:block hidden bg-indigo-500 px-4 py-4 text-white'>
          <ul className='space-y-4'>
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className='block hover:text-yellow-300 duration-200'
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className='mt-6 flex flex-col gap-4'>
            <Link
              to="/login"
              className='bg-white text-center text-indigo-600 py-2 rounded-full font-semibold hover:bg-indigo-100'
            >
              Login
            </Link>
            <Link
              to="/signup"
              className='bg-yellow-300 text-center text-black py-2 rounded-full font-semibold hover:bg-yellow-400'
            >
              SignUp
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
