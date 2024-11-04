import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Intro = () => {
  const navigate = useNavigate();
  const data = useData();
  const videoRef = useRef(null);

  useEffect(() => {
    if (!data) return; // Only proceed if data is available

    // GSAP timeline for animations
    const tl = gsap.timeline({ paused: true });

    // Animation sequence: Fade in "Press Enter" text at the bottom of the screen
    tl.fromTo(
      '.press-enter',
      { opacity: 0, y: 50 }, // Start position (below)
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' } // End position
    );

    // Video end event handler
    const handleVideoEnd = () => {
      tl.play();
    };

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

    // Add event listener for video end
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (pressEnterElement) {
        pressEnterElement.removeEventListener('click', handleClick);
      }
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [data, navigate]); 
  if (!data) return <div>Loading...</div>;

  return (
    <div className="intro fixed top-0 left-0 w-full h-full bg-white overflow-hidden">
      
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-fit lg:object-cover z-0"
        src={data.introclip}
        autoPlay
        muted
        playsInline
      ></video>

      <p className="press-enter text-color2 opacity-0 absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl cursor-pointer z-10">
        Enter...
      </p>
    </div>
  );
};

export default Intro;
