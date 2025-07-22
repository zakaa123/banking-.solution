import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import person1 from "../assests/img_1 (2).jpg";
import person2 from "../assests/person_1.jpg";
import person3 from "../assests/person_7.jpg";
import person4 from "../assests/person_8.jpg";
import person5 from "../assests/person_1.jpg";
import person6 from "../assests/person_4.jpg";
import person7 from "../assests/person_3.jpg";
import person8 from "../assests/person_4.jpg";

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    {
      name: "Kaiara Spencer",
      role: "FINANCE MANAGER",
      image: person1, // ✅ fixed: no quotes
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Dave Simpson",
      role: "MARKETING MANAGER",
      image: person2,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Ben Thompson",
      role: "ACCOUNTANT",
      image: person3,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Kyla Stewart",
      role: "ACCOUNTANT",
      image: person4,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Kalara Spencer",
      role: "FINANCE MANAGER",
      image: person5,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Dave Simpson",
      role: "MARKETING MANAGER",
      image: person6,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Ben Thompson",
      role: "ACCOUNTANT",
      image: person7,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Kyla Stewart",
      role: "ACCOUNTANT",
      image: person8,
      social: { facebook: "#", instagram: "#", linkedin: "#" }
    }
  ];

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="team-container">
      <div className="team-header">
        <h2>Meet Team</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p> 
      </div>

      <div className="team-row">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-wrapper">
              <motion.img
                src={member.image}
                alt={member.name}
                whileHover={{ scale: 1.05 }}
                className="team-image"
              />
              {hoveredIndex === index && (
                <motion.div
                  className="social-icons"
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.a
                    href={member.social.facebook}
                    variants={iconVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a
                    href={member.social.instagram}
                    variants={iconVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    variants={iconVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                </motion.div>
              )}
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
