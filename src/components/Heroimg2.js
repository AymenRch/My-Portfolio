import React, { useState, useEffect, useRef } from "react";
import "./Heroimg2.css";
import { FaBook, FaCode } from "react-icons/fa";

const Heroimg2 = () => {
  const [progress, setProgress] = useState({
    HTML: 0,
    CSS: 0,
    javascript: 0,
    react: 0,
    php: 0,
    ExpressJs: 0,
    Laravel: 0,
    Flutter: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setProgress({
            HTML: 100,
            CSS: 80,
            javascript: 80,
            react: 70,
            php: 90,
            ExpressJs: 90,
            Laravel: 70,
            Flutter: 90,
          });
        } else {
          setProgress({
            HTML: 0,
            CSS: 0,
            javascript: 0,
            react: 0,
            php: 0,
            ExpressJs: 0,
            Java: 0,
            Flutter: 0,
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="hero2">
      <div className="mask2"></div>

      {/* RIGHT SIDE */}
      <div
        className="right"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="content" style={{ paddingRight: "220px", marginLeft: "30px" }}>
          <h1>
            <FaBook size={50} style={{ color: "#0ef", paddingRight: "1rem" }} />
            Education
          </h1>
          <p>Computer Science Bachelor.</p>
          <p>21st Century Soft Skills Certification.</p>
          <p>AWS Data Analyst Certification.</p>
        </div>

        <div className="content2">
          <h1>
            <FaBook size={50} style={{ color: "#0ef", paddingRight: "1rem" }} />
            Experience
          </h1>
          <p>
            <strong style={{whiteSpace:"nowrap"}}>One Year of Freelance :</strong> <br />
            Developed Custom Web & Mobile Apps For Clients.
          </p>
          <p>
            <strong style={{whiteSpace:"nowrap"}}>QA tester at Createk Solution :</strong> <br />
            Software Unit Testing & Pentesting.
          </p>
          <p>
            <strong style={{whiteSpace:"nowrap"}}>Frontend Dev at Createk Solution :</strong> <br />
            Creating Modern Interactive User Interfaces.
          </p>
          <p>
            <strong style={{whiteSpace:"nowrap"}}>Active in Coding Communities :</strong> <br />
            Regularly Participate in Online Coding Challenges.
          </p>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className="left">
        <div className="content3" ref={sectionRef}>
          <h1>
            <FaCode size={50} style={{ color: "#0ef", paddingRight: "1rem" }} />
            Skills
          </h1>

          {Object.keys(progress).map((skill) => (
            <div className="skill-bar" key={skill}>
              <p>{skill}</p>
              <div className="bar">
                <div className="progress" style={{ width: `${progress[skill]}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroimg2;
