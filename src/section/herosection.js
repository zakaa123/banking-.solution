import React from "react";
import { Carousel } from "react-bootstrap";
import bgImage from "../assests/hero_2.jpg";

function HeaderSection() {
  return (
    <header
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
            // color:"#B8B2A6B3",
      }}
    >
      <div className="overlay"></div>
      <Carousel
        fade
        indicators
        controls={false}  // 🚫 No next/prev arrows
        interval={4000}   // Auto-slide every 2s
        pause={false}     // Keeps sliding even on hover
        className="hero-carousel"
      >
        <Carousel.Item>
          <div className="hero-content">
            <h1 className="display-3 fw-bold">BANKING SOLUTIONS</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-content">
            <h1 className="display-3 fw-bold">SAVING ACCOUNTS</h1>
            <p className="lead">
              Secure, fast and reliable banking solutions for modern needs.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-content">
            <h1 className="display-3 fw-bold">FINANCING SOLUTIONS</h1>
            <p className="lead">
              Experience the next generation of digital banking today.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default HeaderSection;
