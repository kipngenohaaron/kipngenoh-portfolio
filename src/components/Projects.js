import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project 1: E-commerce Website</h3>
          <p>
            A full-stack e-commerce website built using React for the frontend and Node.js for the backend.
            <br />
            Technologies: React, Node.js, MongoDB, Express.js, Stripe API
          </p>
          <a href="https://github.com/yourusername/e-commerce" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
        <div className="project-card">
          <h3>Project 2: Blog Application</h3>
          <p>
            A blog platform where users can create, read, update, and delete posts.
            <br />
            Technologies: React, Node.js, MongoDB, Express.js
          </p>
          <a href="https://github.com/yourusername/blog-app" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
        <div className="project-card">
          <h3>Project 3: Portfolio Website</h3>
          <p>
            A personal portfolio built using React to showcase my projects and skills.
            <br />
            Technologies: React, HTML, CSS, JavaScript
          </p>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
