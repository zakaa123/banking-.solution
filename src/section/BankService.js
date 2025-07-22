import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';


// Import your images
import loanImage from '../assests/hero_1.jpg';
// import consultationImage from '../assets/hero_2.jpg';

const BankServices = () => {
  const services = [
    {
      id: 1,
      title: "Bank Loan",
      description: "Far far away, behind the word mountains, far from the countries Volcalia and Consonantia, there live the blind texts.",
      image: loanImage,
      imagePosition: 'left'
    },
    // {
    //   id: 2,
    //   title: "Banking Consultation",
    //   description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    //   image: consultationImage,
    //   imagePosition: 'right'
    // }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <div className="bank-services">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`service-item ${service.imagePosition}`}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        >
          <div className="service-image">
            <motion.img 
              src={service.image} 
              alt={service.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <motion.button
              className="learn-more-btn"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <FaArrowRight className="arrow-icon" />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BankServices;