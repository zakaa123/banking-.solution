import React, { useState } from 'react';
import { motion } from 'framer-motion';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Can I accept both Paypal and Stripe?",
      answer: "Far far away, behind the word mountains, far from the countries Volkalla and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      id: 2,
      question: "What available is refund period?",
      answer: "Far far away, behind the word mountains, far from the countries Volkalla and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      id: 3,
      question: "Where are you from?",
      answer: "Voluptatum nobis obcaseati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores."
    },
    {
      id: 4,
      question: "What is your opening time?",
      answer: "Far far away, behind the word mountains, far from the countries Volkalla and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <motion.div 
        className="faq-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Frequently Ask Questions</h1>
      </motion.div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <motion.div
                className="faq-icon"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
              >
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 8L15 1" stroke="#3498db" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>
            </div>
            
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: activeIndex === index ? 'auto' : 0,
                opacity: activeIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default FAQ;