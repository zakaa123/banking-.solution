import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "01. Online Applications",
      description: "A small river named Duden flows by their place and supplies it with the necessary regellalia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "02. Account Approval",
      description: "Another description about the account approval process would go here with similar styling and length.",
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "03. Fund Management",
      description: "Details about how fund management works in this system with the same descriptive style.",
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  return (
    <div className="how-it-works">
      <motion.div 
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>How It Works</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regellalia.</p>
        <div className="divider"></div>
      </motion.div>

      <div className="slider-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        
        <div className="slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="slide-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="slide-grid">
                <motion.div 
                  className="image-container"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
                </motion.div>
                
                <motion.div 
                  className="text-container"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>{slides[currentSlide].title}</h2>
                  <p>{slides[currentSlide].description}</p>
                  <button className="learn-more">{slides[currentSlide].cta}</button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button className="nav-button next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => {
              setCurrentSlide(index);
              setAutoPlay(false);
              setTimeout(() => setAutoPlay(true), 5000);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;