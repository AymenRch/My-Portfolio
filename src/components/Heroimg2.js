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
    Java: 0,
    Flutter: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Trigger the animation
          setProgress({
            HTML: 100,
            CSS: 80,
            javascript: 80,
            react: 70,
            php: 90,
            ExpressJs: 70,
            Java: 70,
            Flutter: 90,
          });
        } else {
          // Reset progress when leaving the viewport
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
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
      <div className="mask2">
      </div>
      <div className="right" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
         {/* Other Content */}
      <div className="content" style={{paddingRight:"220px",marginLeft:"30px"}}>
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
        <p><strong>One Year of Freelance :</strong> <br></br> 
        Developed Custom Web & Mobile Fpps For Clients.</p>
        <p><strong>Various School Projects :</strong> <br></br>
        Three Years Of System Designing And Developing.
        </p>
        <p><strong>Active in Coding Communities :</strong> <br></br>Regularly Participate in Online Coding Challenges.</p>
      </div>
      </div>
     

      {/* Content 3 (Skill Bars with Animation) */}
      <div className="content3" ref={sectionRef}>
        <h1>
          <FaCode size={50} style={{ color: "#0ef", paddingRight: "1rem" }} />
          Skills
        </h1>
        <div className="skill-bar">
          <p>HTML</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.HTML}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>CSS</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.CSS}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>JavaScript</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.javascript}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>React</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.react}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>PHP</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.php}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>ExpressJs</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.ExpressJs}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>Java</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.Java}%` }}
            ></div>
          </div>
        </div>
        <div className="skill-bar">
          <p>Flutter</p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progress.Flutter}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg2;
