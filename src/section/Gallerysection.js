import React, { useState } from "react";
import { motion } from "framer-motion";
import person1 from "../assests/person_5.jpg";
import person2 from "../assests/img_2 (1).jpg";
import person3 from "../assests/img_3 (1).jpg";
import person4 from "../assests/img_4 (1).jpg";
import person5 from "../assests/hero_1.jpg";
import person6 from "../assests/person_6.jpg";
import person7 from "../assests/person_7.jpg";
import person8 from "../assests/hero_1.jpg";

const categories = ["ALL", "EVENTS", "PARTY", "HOLIDAYS"];

const images = [
  { src: person1, category: "EVENTS" },
  { src: person2, category: "PARTY" },
  { src: person3, category: "HOLIDAYS" },
  { src: person7, category: "EVENTS" },
  { src: person5, category: "PARTY" },
  { src: person4, category: "HOLIDAYS" },
  { src: person3, category: "EVENTS" },
  { src: person8, category: "PARTY" },
  { src: person2, category: "EVENTS" },
  { src: person6, category: "PARTY" },
  { src: person3, category: "HOLIDAYS" },
  { src: person4, category: "EVENTS" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredImages =
    activeCategory === "ALL"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-filters">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            className={`filter-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img src={img.src} alt={`Gallery ${index}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
