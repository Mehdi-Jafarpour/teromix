import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [headerBg, setHeaderBg] = useState('transparent');

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setShowLogo(currentScroll > 200); 
    setHeaderBg(currentScroll > 200 ? 'rgba(255, 255, 255, 0.9)' : 'transparent')
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-0 z-50 flex items-center justify-between "
        style={{ backgroundColor: headerBg }}
    >
      
      {showLogo && (
        <div className="flex items-center " style={{ marginLeft: '20px' }}> 
          <img src="/images/logo.png" alt="Logo"  style={{ width: '200px' }} /> 
        </div>
      )}

      <div className="flex justify-end items-center w-full">
        <button onClick={toggleMenu} className="text-color1 text-4xl m-6" style={{ zIndex: 1000 }}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/90 flex flex-col items-center justify-center z-40">
          <nav className="flex flex-col items-center justify-center space-y-6 text-2xl sm:text-3xl md:text-4xl">
            <Link to="/" onClick={toggleMenu} className="text-gray-800 hover:text-color1">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-800 hover:text-color1">
              About Us
            </Link>
            <Link to="/projects" onClick={toggleMenu} className="text-gray-800 hover:text-color1">
              Projects
            </Link>
            <Link to="/services" onClick={toggleMenu} className="text-gray-800 hover:text-color1">
              Our Services
            </Link>
            <Link to="/partners" onClick={toggleMenu} className="text-gray-800 hover:text-color1">
              Our Partners
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-800 hover:text-color1">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
