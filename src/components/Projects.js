import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills and projects.',
      technologies: ['React', 'CSS', 'JavaScript'],
      demo: '#',
      repo: 'https://github.com/kipngenohaaron/portfolio',
    },
    {
      title: 'E-commerce App',
      description: 'A modern e-commerce platform with payment gateway integration.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demo: '#',
      repo: 'https://github.com/kipngenohaaron/ecommerce-app',
    },
    {
      title: 'Learning Management System',
      description: 'An LMS for educators to manage online courses.',
      technologies: ['Django', 'React', 'PostgreSQL'],
      demo: '#',
      repo: 'https://github.com/kipngenohaaron/lms',
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a> |{' '}
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
