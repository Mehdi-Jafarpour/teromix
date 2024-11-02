import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Intro = () => {
  const navigate = useNavigate();
  const data = useData();

  // Debugging: Check if data is available
  console.log('Data:', data);

  useEffect(() => {
    if (!data) return; // Only proceed if data is available

    const tl = gsap.timeline();

    // Animation sequence
    tl.set('.intro', { backgroundColor: 'white' })
      .to('.logo', { duration: 2, opacity: 1 })
      .to('.text-message', { duration: 1, opacity: 1, y: -20 }, '+=2')
      .to('.logo, .text-message', { duration: 1, opacity: 0 }, '+=2')
      .to('.press-enter', { duration: 1, opacity: 1 });

    // Key press handler for "Enter"
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        navigateToHome();
      }
    };

    // Function to navigate to home
    const navigateToHome = () => {
      gsap.to('.intro', {
        duration: 1,
        x: '-100%',
        onComplete: () => navigate('/home'),
      });
    };

    window.addEventListener('keydown', handleKeyPress);

    // Click handler for mobile devices
    const handleClick = () => {
      navigateToHome();
    };

    const pressEnterElement = document.querySelector('.press-enter');
    if (pressEnterElement) {
      pressEnterElement.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (pressEnterElement) {
        pressEnterElement.removeEventListener('click', handleClick);
      }
    };
  }, [data, navigate]); // Added data to dependency array

  // If data is not ready, render a loading indicator
  if (!data) return <div>Loading...</div>;

  return (
    <div className="intro fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      {/* Logo */}
      <img
        src={data.logo}
        alt="Logo"
        className="logo opacity-0 w-40 sm:w-60 md:w-80 "
      />
      {/* Thank You Text */}
      <p className="text-message text-color1 opacity-0 mt-5 text-2xl sm:text-3xl md:text-4xl">
        TOTAL INTERIOR SOLUTIONS
      </p>
      {/* Press Enter Text */}
      <p className="press-enter text-color2 opacity-0 mt-10 text-lg sm:text-xl md:text-2xl cursor-pointer">
        Press Enter
      </p>
    </div>
  );
};

export default Intro;
