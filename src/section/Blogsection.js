import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';


// Import your images
import img1 from '../assests/hero_1.jpg';
import img2 from '../assests/img_2 (1).jpg';
import img3 from '../assests/img_3 (1).jpg';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "45 Best Places To Visit",
      description: "Discover the world's most breathtaking destinations that should be on every traveler's bucket list.",
      image: img1,
      date: "FEBRUARY 26, 2018",
      delay: 0.4
    },
    {
      id: 2,
      title: "45 Best Places To Explore",
      description: "Uncover hidden gems and off-the-beaten-path locations for the ultimate adventure experience.",
      image: img2,
      date: "FEBRUARY 26, 2018",
      delay: 0.6
    },
    {
      id: 3,
      title: "45 Best Places To Relax",
      description: "Find your perfect retreat at these serene locations offering peace and tranquility.",
      image: img3,
      date: "FEBRUARY 26, 2018",
      delay: 0.8
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="blog-section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Blog Post
        </motion.h1>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </motion.p>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: post.delay }}
              whileHover={{ y: -10 }}
            >
              <div className="card-image">
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="date-badge">{post.date}</div>
              </div>
              
              <div className="card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <motion.a 
                  href="#" 
                  className="read-more"
                  whileHover={{ x: 5 }}
                >
                  Read More <FaArrowRight className="arrow-icon" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;