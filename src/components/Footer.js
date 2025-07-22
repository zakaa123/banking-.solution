import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaHeart } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <motion.div 
          className="footer-grid"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Quick Links */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">Quick Link</h3>
            <ul className="footer-links">
              <li><motion.a href="#" whileHover={{ x: 5 }}>About Us</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>Terms & Conditions</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>Privacy Policy</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>Help</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>Rooms</motion.a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><motion.a href="#" whileHover={{ x: 5 }}>Our Location</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>The Hosts</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>About</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>Contact</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }}>Restaurant</motion.a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>98 West 21th Street, Suite 721<br />New York NY 10016</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>(+1) 435.3533</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">Subscribe</h3>
            <p className="newsletter-desc">Sign up for our newsletter</p>
            <motion.form 
              className="newsletter-form"
              whileHover={{ scale: 1.02 }}
            >
              <input type="email" placeholder="Your email..." required />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPaperPlane />
              </motion.button>
            </motion.form>
            <div className="social-icons">
              <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }}><FaFacebookF /></motion.a>
              <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }}><FaTwitter /></motion.a>
              <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }}><FaInstagram /></motion.a>
              <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }}><FaLinkedinIn /></motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>Copyright © 2025 All rights reserved | This template is made with <FaHeart className="heart-icon" /> by Muhammad Zakaa</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;