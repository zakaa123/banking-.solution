import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';


const ContactSection = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <section className="hero1">
        <motion.div 
          className="hero1-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Contact us</h1>
         
        </motion.div>
      </section>

      <div className="container">
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1 
            className="contact-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          
          </motion.h1>
          
          <motion.form 
            className="contact-form"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="form-group" variants={itemVariants}>
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
              <div className="underline"></div>
            </motion.div>
            
            <motion.div className="form-group" variants={itemVariants}>
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
              <div className="underline"></div>
            </motion.div>
            
            <motion.div className="form-group" variants={itemVariants}>
              <input type="tel" id="phone" />
              <label htmlFor="phone">Phone Number</label>
              <div className="underline"></div>
            </motion.div>
            
            <motion.div className="form-group" variants={itemVariants}>
              <textarea id="message" rows="4" required></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="underline"></div>
            </motion.div>
            
            <motion.div className="whatsapp-option" variants={itemVariants}>
              <motion.button 
                type="button" 
                className="whatsapp-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="whatsapp-icon" /> Send via WhatsApp
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
};

export default ContactSection;