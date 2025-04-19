import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

const About = () => {
  return (
    <section className="about-section">
      <Navbar />
      <div className="container">
        <h1 className="title">Discover Shubh Technology</h1>
        <p className="subtitle">
          Founded in 2020, Shubh Technology is dedicated to empowering
          businesses with innovative technology solutions. Our mission is to
          enhance efficiency and drive growth through cutting-edge services.
        </p>

        <div className="info-cards">
          <div className="card">
            <div className="icon">💡</div>
            <h2>Our Mission</h2>
            <p>
              At Shubh Technology, we aim to empower businesses with technology
              solutions that enhance efficiency and drive growth. We prioritize
              innovation and customer satisfaction in all our projects.
            </p>
          </div>

          <div className="card">
            <div className="icon">👍</div>
            <h2>Our Values</h2>
            <p>
              We uphold values of innovation, integrity, customer focus, and
              excellence. These principles guide our work and ensure we deliver
              high-quality solutions tailored to our clients' needs.
            </p>
          </div>

          <div className="card">
            <div className="icon">👥</div>
            <h2>Meet Our Team</h2>
            <p>
              Our team consists of experienced professionals, including Amit
              Sharma (CEO), Priya Gupta (CTO), and Ravi Mehta (Project Manager),
              who are dedicated to delivering exceptional results.
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default About;
