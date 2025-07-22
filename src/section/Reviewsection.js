import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO, Tech Company",
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote: "The service was exceptional! Our revenue increased by 200% after implementing their solutions. Highly recommend their expertise in digital transformation.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Small Business Owner",
      quote: "As a small business, we needed affordable solutions. They delivered beyond our expectations with personalized service and great results.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  return (
    <div className="testimonials-container">
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Happy Customers</h1>
      </motion.div>

      <div className="slider-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>{testimonials[currentIndex].name}</h4>
                    <p>{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="nav-button next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoPlay();
            }}
          />
        ))}
      </div>

     
    </div>
  );
};

export default Testimonials;