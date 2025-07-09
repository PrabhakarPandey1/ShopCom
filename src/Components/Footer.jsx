import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import {
  FaMapLocation,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
} from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

const FooterLinks = [
  { title: 'Home', link: '/#' },
  { title: 'About', link: '/#about' },
  { title: 'Contact', link: '/#contact' },
  { title: 'Blog', link: '/#blog' },
];

function Footer() {
  return (
    <footer className="bg-[#212529] w-full text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div data-aos="fade-right">
          <div className="flex items-center gap-2 mb-4">
            <FiShoppingBag size={30} />
            <h1 className="text-2xl sm:text-3xl font-bold">ShopCom</h1>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your One-Stop Online Shopping Destination for Everything You Need.
            From fashion to electronics, Shopcom brings the best deals right to your doorstep.
            Trusted by thousands, loved by millions — redefining online shopping.
          </p>
        </div>

        {/* Links */}
        <div data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-4">Important Links</h2>
          <ul className="flex flex-col gap-3">
            {FooterLinks.map((link) => (
              <li
                key={link.title}
                className="text-gray-300 hover:text-blue-500 hover:translate-x-1 transition-all duration-300"
              >
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div data-aos="fade-left">
          <h2 className="text-xl font-semibold mb-4">Contact & Social</h2>

          {/* Social Media Icons */}
          <div className="flex gap-4 mb-6">
            {[FaInstagram, FaLinkedin, FaFacebook, FaMobile].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-all">
                <Icon className="text-xl text-white" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <FaMapLocation />
            <p>Darbhanga, Bihar</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-300">
            <IoCall />
            <p>+91 12345 12345</p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopCom. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
