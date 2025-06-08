import React, { useState, useEffect } from "react";
import "./HeroimgStyles.css";
import { Link } from "react-scroll"; // from react-scroll
import IntroImg from "../assets/intro-bg.jpg";

const Heroimg = () => {
  const [scroll, setScroll] = useState(false);

  const changeScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  return (
    <div className={scroll ? "hero hero-scroll" : "hero"}>
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Not Found" />
      </div>
      <div className="content">
        <p>RACHEDI AYMEN</p>
        <h1>FULL STACK WEB & MOBILE DEVELOPER</h1>
        <Link to="project" smooth={true} duration={500} className="btn">PROJECT</Link>
        <Link to="contact" smooth={true} duration={500} className="btn btn-light">CONTACT</Link>
      </div>
    </div>
  );
};

export default Heroimg;
