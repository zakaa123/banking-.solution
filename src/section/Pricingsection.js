import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';


const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$47",
      period: "/year",
      features: [
        "Official quaerat eaque neque",
        "Possimus aut consequuntur incidunt",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipisicing elit",
        "Dolorum esse odio quas architecto sint"
      ],
      featured: false
    },
    {
      id: 2,
      name: "Premium",
      price: "$200",
      period: "/year",
      features: [
        "Official quaerat eaque neque",
        "Possimus aut consequuntur incidunt",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipisicing elit",
        "Dolorum esse odio quas architecto sint"
      ],
      featured: true
    },
    {
      id: 3,
      name: "Professional",
      price: "$750",
      period: "/year",
      features: [
        "Official quaerat eaque neque",
        "Possimus aut consequuntur incidunt",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipisicing elit",
        "Dolorum esse odio quas architecto sint"
      ],
      featured: false
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="pricing-container">
      <motion.div 
        className="pricing-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Pricing</h1>
      </motion.div>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.02 }}
          >
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <div className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
            </div>
            
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck className="check-icon" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <motion.button
              className="buy-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>

    
    </div>
  );
};

export default Pricing;