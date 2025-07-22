import React from "react";
import NavbarSection from "./components/navbar";
import HeaderSection from "./section/herosection";
import MoneySavingsPage from "./components/moneysaving";
import AboutUs from "./section/Aboutsection";
import TeamSection from "./section/TeamSection";
import GallerySection from "./section/Gallerysection";
import HowItWorks from "./section/Worksection";
import Services from "./section/Servicesection";
import Testimonials from "./section/Reviewsection";
import Pricing from "./section/Pricingsection";
import FAQ from "./section/Faqsection";
import BankServices from "./section/BankService";
import BlogSection from "./section/Blogsection";
import ContactSection from "./section/Contact";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarSection />

      {/* Home */}
      <div id="home" className="section">
        <HeaderSection />
      </div>

      {/* About */}
      <div id="about" className="section">
        <MoneySavingsPage />
        <AboutUs />
      </div>

      {/* Team */}
      <div id="team" className="section">
        <TeamSection />
      </div>

      {/* Gallery */}
      <div id="Gallery" className="section">
        <GallerySection />
      </div>

      {/* How It Works */}
      <div id="HowItWorks" className="section">
        <HowItWorks />
      </div>

      {/* Services */}
      <div id="Services" className="section">
        <Services />
      </div>

      {/* Testimonials */}
      <div id="Testinomials" className="section">
        <Testimonials />
      </div>

      {/* Pricing */}
      <div id="Pricing" className="section">
        <Pricing />
      </div>

      {/* FAQ */}
      <div id="FAQ" className="section">
        <FAQ />
      </div>

      {/* Bank Services */}
      <div id="BankServices" className="section">
        <BankServices />
      </div>

      {/* Blog */}
      <div id="blog" className="section">
        <BlogSection />
      </div>

      {/* Contact */}
      <div id="contact" className="section">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
