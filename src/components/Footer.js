
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
     
      <div className="border-t border-gray-300 mb-6"></div>

      <div className="container mx-auto px-4">
        <div className="flex justify-center sm:justify-between items-center">

           <Link to={"/home"} >
              <div className="flex items-center"> 
                <img src="/images/logo.png" alt="Logo" style={{ width: '200px' }} /> 
              </div>
            </Link>
    
            <nav className="hidden sm:flex space-x-3 text-sm">
              <Link to="/" className="text-gray-800 hover:text-color1">
                Home
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-color1">
                About Us
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-color1">
                Projects
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-color1">
                Our Services
              </Link>
              <Link to="/partners" className="text-gray-800 hover:text-color1">
                Our Partners
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-color1">
                Contact Us
              </Link>
            </nav>
            

    
            <div className="flex justify-center sm:justify-end space-x-4 mb-4 md:mb-0">
              <a href="https://www.facebook.com/teromix?mibextid=LQQJ4d" target="_blank" className="text-gray-800 hover:text-color1">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/teromix.ge?igsh=MTAxZWZ5a3A1djQ5dg==" target="_blank" className="text-gray-800 hover:text-color1">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/995591644666" target="_blank" className="text-gray-800 hover:text-color1">
                <FaWhatsapp size={20} />
              </a>
            </div>
        </div>
        <div className="border-t border-gray-200 mt-6 mb-4"></div>
        <p className="text-center text-sm text-gray-500">
          ©2024 TEROMIX | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
