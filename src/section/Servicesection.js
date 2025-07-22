import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";

import businessConsultingImg from "../assests/001-wallet.svg";
import insuranceConsultingImg from "../assests/002-rich.svg";
import creditCardImg from "../assests/003-notes.svg";
import financialInvestmentImg from "../assests/004-cart.svg";
import incomeMonitoringImg from "../assests/006-credit.svg";
import financialManagementImg from "../assests/003-notes.svg";



const Services = () => {
  const services = [
    {
      id: 1,
      title: "Business Consulting",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      hasButton: true,
      image: businessConsultingImg
    },
    {
      id: 2,
      title: "Insurance Consulting",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      hasButton: false,
      image: insuranceConsultingImg
    },
    {
      id: 3,
      title: "Credit Card",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      hasButton: true,
      image: creditCardImg
    },
    {
      id: 4,
      title: "Financial Investment",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      hasButton: false,
      image: financialInvestmentImg
    },
    {
      id: 5,
      title: "Income Monitoring",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      hasButton: true,
      image: incomeMonitoringImg
    },
    {
      id: 6,
      title: "Financial Management",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      hasButton: false,
      image: financialManagementImg
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className="services-section py-5">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Our Services</h2>
        </motion.div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={service.id} sm={12} md={6} lg={4}>
              <motion.div
                className="service-card text-center p-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-icon mb-3"
                />
                <h5 className="service-title">{service.title}</h5>
                <p className="service-description">{service.description}</p>
                {service.hasButton && (
                  <a href="#learn-more" className="learn-more-link">
                    Learn More
                  </a>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
