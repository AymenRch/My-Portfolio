import React from 'react';
import ECOM from '../assets/ecom.png';
import PORTFOLIO from '../assets/portfolio.png';
import Delivyou from '../assets/Delivyou.png';
import Keplox from '../assets/Keplox.png';
import OBJET from '../assets/object.png';
import './ProjectsStyles.css';
import { FaGithub } from 'react-icons/fa'

const data = [
    {
        id: 1,
        name: 'ScentSpace',
        description: 'Modern E-Commerce Website',
        image: ECOM,
        url: 'https://aymenrch.github.io/parfumes/',
        tech: ['React', 'Node.js', 'supabase'],
        github:'https://github.com/AymenRch/parfumes',
        myRole: 'Full-Stack Dev'
    },
    {
        id: 2,
        name: 'Delivyou',
        description: 'A Shipping Platform',
        image: Delivyou,
        url: 'https://delivyou.com/',
        tech: ['Laravel', 'MySQL'],
        github: 'https://github.com/AymenRch',
        myRole: 'Frontend Dev'
    },
    {
        id: 3,
        name: 'Object Detection',
        description: 'Real-time Object Detection',
        image: OBJET,
        url: 'https://aymenrch.github.io/Object-Detector/',
        tech: ['React', 'TensorFlow'],
        github: 'https://github.com/AymenRch/Object-Detector',
        myRole: 'Full-Stack Dev'
    },
    {
        id: 4,
        name: 'Portfolio',
        description: 'My Personal Portfolio',
        image: PORTFOLIO,
        url: 'https://aymenrch.github.io/My-Portfolio/',
        tech: ['React'],
        github: 'https://github.com/AymenRch/My-Portfolio',
        myRole: 'Full-Stack Dev'
    },
    {
        id: 5,
        name: 'Keplox',
        description: 'Business Management Dashboard',
        image: Keplox,
        url: 'https://www.keplox.com/login',
        tech: ['Laravel', 'MySQL'],
        github: 'https://github.com/AymenRch',
        myRole: 'Frontend Dev'
    }
    
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h1 className="projects-title">My <span className="highlight">Projects</span></h1>
            <div className="projects-list">
                {data.map((project) => (
                    <div key={project.id} className="project-card">

                        <div className="image-wrapper">
                            <img
                                className="project-image"
                                src={project.image}
                                alt={project.name}
                            />
                            <a
                                href={project.github} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-overlay"
                            >
                                View on GitHub<FaGithub style={{margin:"5px"}}/>
                            </a>
                        </div>

                        <div className="project-content">
                            <div className="project-name">{project.name}</div>
                            <div className="project-name" style={{ fontWeight: "200" }}>
                                {project.description}
                            </div>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project →
                            </a>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    flexWrap: "wrap",
                                    marginTop: "10px",
                                }}
                            >
                                {project.tech.map((tech, index) => (
                                    <div key={index} className="tech-item">
                                        <h5
                                            style={{
                                                margin: 0,
                                                color: "white",
                                                border: "1.5px solid #fff",
                                                borderRadius: "12px",
                                                padding: "1px 5px",
                                            }}
                                        >
                                            {tech}
                                        </h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Projects;
