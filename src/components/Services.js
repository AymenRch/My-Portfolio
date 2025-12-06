import "./Services.css";
import IntroImg from "../assets/project1.png";
import React from "react";
import { FaCode, FaInstagram, FaMobile } from "react-icons/fa";

const Services = () => {
  return (
    <div className="hero5">
      <div className="mask5">
        <img className="intro-img" src={IntroImg} alt="Not Found" />
        <div className="header5">
          <h1>My <span className="highlight">Services</span></h1>
        </div>
        <div className="content5">
          <div className="service5">
            <h2>
              <FaCode size={40} style={{ color: "#0ef" }} />
            </h2>
            <h4>Web Development</h4>
            <p>Creating modern, responsive, and dynamic websites tailored to your needs.</p>
          </div>
          <div className="service5">
            <h2>
              <FaMobile size={40} style={{ color: "#0ef" }} />
            </h2>
            <h4>Mobile Development</h4>
            <p>Building user-friendly and efficient mobile applications for all platforms.</p>
          </div>
          <div className="service5">
            <h2>
              <FaInstagram size={40} style={{ color: "#0ef" }} />
            </h2>
            <h4>Automation</h4>
            <p>Automating tasks to boost efficiency and consistency.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
