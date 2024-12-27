import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [headerBg, setHeaderBg] = useState('transparent');
  const [showDownloads, setShowDownloads] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newIsOpen = !prev;
      
      if (!newIsOpen) {
        setShowDownloads(false);
      }
      return newIsOpen;
    });
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setShowLogo(currentScroll > 200); 
    setHeaderBg(currentScroll > 200 ? 'rgba(255, 255, 255, 0.9)' : 'transparent');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-0 z-50 flex items-center justify-between"
        style={{ backgroundColor: headerBg }}
    >
      {showLogo && (
        <Link to={"/home"} >
          <div className="flex items-center" style={{ marginLeft: '20px' }}> 
            <img src="/images/logo.png" alt="Logo" style={{ width: '200px' }} /> 
         </div>
        </Link>
        
      )}

      <div className="flex justify-end items-center w-full">
        <button onClick={toggleMenu} className="text-color1 text-4xl m-6" style={{ zIndex: 1000 }}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/90 flex flex-col items-center justify-center z-40 jump-in">
          <nav className="flex flex-col items-center justify-center space-y-6 text-2xl sm:text-3xl md:text-4xl">
            <Link to="/home" onClick={toggleMenu} className="text-gray-800 hover:text-color1 ">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-800 hover:text-color1 ">About Us</Link>
            <Link to="/projects" onClick={toggleMenu} className="text-gray-800 hover:text-color1 ">Projects</Link>
            <Link to="/services" onClick={toggleMenu} className="text-gray-800 hover:text-color1 ">Our Services</Link>
            <Link to="/partners" onClick={toggleMenu} className="text-gray-800 hover:text-color1 ">Our Partners</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-800 hover:text-color1 ">Contact Us</Link>
            
            <div className="relative">
              <button 
                onClick={() => setShowDownloads((prev) => !prev)} 
                className="flex items-center text-gray-800 hover:text-color1"
              >
                Downloads
                <AiOutlineRight className="ml-1 text-sm" /> 
              </button>
              {showDownloads && (
                <div className="absolute left-10 sm:left-28 w-60 z-50 fade-in-text">
                  <a 
                    href="./images/pdf-files/TEROMIX CATALOGUE 2024-1_Optimized.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-lg text-color2 hover:text-color3"
                  >
                    Teromix Profile 2023
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
