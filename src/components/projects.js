import React from 'react';
import ECOM from '../assets/ecom.png';
import PORTFOLIO from '../assets/portfolio.png';
import './ProjectsStyles.css';

const data = [
    {
        id: 1,
        name: 'ScentSpace',
        description: 'Modern E-Commerce Website',
        image: ECOM,
        url: 'https://ecom-front-git-main-aymenrchs-projects.vercel.app/',
        tech: ['React', 'Node.js', 'supabase']
    },
    {
        id: 2,
        name: 'Portfolio',
        description: 'My Personal Portfolio',
        image: PORTFOLIO,
        url: 'https://aymenrch.github.io/My-Portfolio/',
        tech: ['React']
    },

];

const Projects = () => {
    return (
        <div className="projects-section">
            <h1 className="projects-title">My <span className="highlight">Projects</span></h1>
            <div className="projects-list">
                {data.map((project) => (
                    <div key={project.id} className="project-card">
                        <img className="project-image" src={project.image} alt={project.name} />
                        <div className="project-content">
                            <div className="project-name">{project.name}</div>
                            <div className="project-name" style={{ fontWeight: "200" }}>{project.description}</div>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project →
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}>
                                {project.tech.map((tech, index) => (
                                    <div key={index} className="tech-item">
                                        <h5 style={{ margin: 0, color:"white", border:"1.5px solid #fff", borderRadius:"12px", padding:"1px 5px" }}>{tech}</h5>
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
