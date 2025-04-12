import React from "react";
import "./Home.css";
import firstImage from "../../assets/project.jpeg";
import Navbar from "../Navbar/Navbar.js";
import officeImg from "../../assets/3.png";
import dunnyimg from "../../assets/dunny.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="hero">
        <div className="hero-text">
          <h1>
            <span className="highlight">Smart Solutions</span> for a <br />
            <em>Smarter Business</em>
          </h1>
          <p>
            Shubh Technology delivers end-to-end solutions in web and mobile
            development, automation, AI/ML, and LLM development. We build fast,
            scalable, and smart solutions tailored to your unique business
            needs.
          </p>

          <div className="signup">
            <input type="email" placeholder="Enter your email" />
            <button>Sign up</button>
          </div>

          <p className="terms">
            By signing up, you agree to our <a href="#">Terms and Conditions</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </p>
        </div>

        <div className="hero-image">
          <img src={firstImage} alt="Team working" />
        </div>
      </main>

      {/* New Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>Discover Shubh Technology's Journey</h2>
          <p>
            Founded in 2020, Shubh Technology has rapidly become a trusted
            partner for businesses seeking to harness the power of technology.
            Our mission is to empower organizations with cutting-edge solutions
            that enhance efficiency and drive growth. We value innovation,
            integrity, customer focus, and excellence in all our endeavors. Our
            dedicated team includes industry experts like Amit Sharma, our CEO
            with over 15 years of experience, Priya Gupta, our CTO specializing
            in AI and software architecture, and Ravi Mehta, our Project Manager
            known for his project management skills. Together, we are committed
            to delivering high-quality technology solutions tailored to your
            needs.
          </p>
        </div>
      </section>

      {/* {Office sectin } */}
      <section className="office-section">
        <img src={officeImg} alt="Team collaborating in office" />
      </section>

      {/* {second image } */}
      <section className="second-photo-section">
        <div className="second-photo-text">
          <h1>Crafting Exceptional Web Experiences for your Business</h1>
          <p>
            At Shubh Technology, we specialize in building robust and scalable
            web applicaitons using cutting -edge techologies.Our expertise in
            Angular , React , Next.js and Node.js ensures that your website is
            not only visually appealing but also delivers exceptional
            performance and user experience
          </p>
          <ul>
            <li>
              <span>&lt;/&gt;</span> Custom web development : Toiler solutions
              to meet your specific needs business needs.
            </li>
            <li>
              <span>&lt;/&gt;</span> Responsive Design : Ensuring your website
              that adapt to all devices
            </li>
            <li>
              <span>&lt;/&gt;</span> End-to-End Product support
            </li>
          </ul>
        </div>
        <div className="second-photo-image">
          <img src={dunnyimg} alt="Team working on modern digital solutions" />
        </div>
      </section>

      {/* mobile solutionsection  */}
      <section className="mobile-solution">
        <div className="about-content">
          <div className="left-content">
            <h3>Mobile Solutions</h3>
            <h2>Discover Shubh Technology's Journey</h2>
          </div>
          <div className="right-content">
            <p>
              Founded in 2020, Shubh Technology has rapidly become a trusted
              partner for businesses seeking to harness the power of technology.
              Our mission is to empower organizations with cutting-edge
              solutions that enhance efficiency and drive growth. We value
              innovation, integrity, customer focus, and excellence in all our
              endeavors. Our dedicated team includes industry experts like Amit
              Sharma, our CEO with over 15 years of experience, Priya Gupta, our
              CTO specializing in AI and software architecture, and Ravi Mehta,
              our Project Manager known for his project management skills.
              Together, we are committed to delivering high-quality technology
              solutions tailored to your needs.
            </p>
            <button className="btnn learn-more">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
