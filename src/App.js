import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Intro from './components/Intro';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  const handleIntroComplete = () => {
    setShowFooter(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Intro onComplete={handleIntroComplete} />} />
        <Route path="/home" element={<Home onComplete={handleIntroComplete} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter && <Footer />}
    </Router>
  );
}

export default App;
