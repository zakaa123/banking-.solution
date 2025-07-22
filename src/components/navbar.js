import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

function NavbarSection() {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About Us", href: "about", dropdown: [
        { name: "Team", href: "team" },
        { name: "Pricing", href: "Pricing" },
        { name: "FAQ", href: "FAQ" },
        { name: "Gallery", href: "Gallery" },
        { name: "Services", href: "Services" },
        { name: "Testimonials", href: "Testinomials" },
      ]
    },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" }
  ];

  const socialIcons = [
    { icon: <FaFacebook />, href: "#facebook" },
    { icon: <FaTwitter />, href: "#twitter" },
    { icon: <FaLinkedin />, href: "#linkedin" }
  ];

  // 👇 Smooth scroll function
  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded(false); // Close navbar on mobile
  };

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded}
      fixed="top" 
      className="shadow-sm"
      style={{ 
        height: "70px",
        backgroundColor: "#B8B2A6B3",
        backdropFilter: "blur(10px)"
      }}
    >
      <Container>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Navbar.Brand 
            onClick={() => scrollToSection("home")}
            className="fw-bold text-light fs-3 d-flex align-items-center"
            style={{ fontFamily: "'Playfair Display', serif", height: "100%", cursor: "pointer" }}
          >
            Banker
            <span style={{ color: "#FF5733" }}>.</span>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0 focus:ring-0 focus:shadow-none"
        >
          {expanded ? (
            <FaTimes className="text-primary" size={24} />
          ) : (
            <FaBars className="text-primary" size={24} />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link, index) => (
              link.dropdown ? (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <NavDropdown 
                    title={link.name} 
                    id={`nav-dropdown-${index}`}
                    className="mx-lg-2 my-2 my-lg-0"
                  >
                    {link.dropdown.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <NavDropdown.Item 
                          onClick={() => scrollToSection(item.href)}
                          className="py-2"
                          style={{ cursor: "pointer" }}
                        >
                          {item.name}
                        </NavDropdown.Item>
                      </motion.div>
                    ))}
                  </NavDropdown>
                </motion.div>
              ) : (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Nav.Link 
                    onClick={() => scrollToSection(link.href)}
                    className="mx-lg-2 my-2 my-lg-0 fw-medium d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    {link.name}
                  </Nav.Link>
                </motion.div>
              )
            ))}

            <div className="d-flex ps-lg-4 ms-lg-3 border-start border-secondary align-items-center" style={{ height: "100%" }}>
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="nav-link text-dark mx-1"
                  whileHover={{ y: -3, color: "#ffffff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
