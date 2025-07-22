import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assests/hero_1.jpg"; // Replace with your actual image

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Heading Section */}
      <motion.div
        className="about-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-text">
          <h3>We Solve Your Financial Problem</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
