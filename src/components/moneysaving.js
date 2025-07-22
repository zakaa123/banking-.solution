import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assests/about_2.jpg"; // ✅ Correct image import
import businessConsultingImg from "../assests/001-wallet.svg";
import financialInvestmentImg from "../assests/004-cart.svg";
import incomeMonitoringImg from "../assests/006-credit.svg";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MoneySaving = () => {
  return (
    <div className="container">
      {/* Top Features Section */}
      <motion.section
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            image:  businessConsultingImg,
            title: "Money Savings",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          },
          {
            image: financialInvestmentImg,
            title: "Online Shoppings",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          },
          {
            image: incomeMonitoringImg,
            title: "Credit / Debit Cards",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={item.image} alt={item.title} className="feature-image" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Amortization Computation Section */}
      <motion.section
        className="amortization"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="amortization-img">
          <img src={aboutImage} alt="Man with Calculator" />
        </div>
        <div className="amortization-content">
          <h2>Amortization Computation</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul>
            <li>✔ Officia quaerat eaque neque</li>
            <li>✔ Lorem ipsum dolor sit amet</li>
            <li>✔ Consectetur adipisicing elit</li>
          </ul>
          <div className="email-form">
            <input type="email" placeholder="Enter your email" />
            <button>Submit Email</button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MoneySaving;
