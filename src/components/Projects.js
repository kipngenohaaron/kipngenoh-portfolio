// import React from 'react';

// const Projects = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <h2>Projects</h2>
//       <div className="project-list">
//         <div className="project-card">
//           <h3>1. E-commerce Website</h3>
//           <p>
//             A full-stack e-commerce website built using React for the frontend and Node.js for the backend. 
//             Users can browse products, add to cart, and complete transactions.
//           </p>
//           <a href="https://github.com/yourusername/e-commerce" target="_blank" rel="noopener noreferrer">
//             GitHub Repo
//           </a>
//         </div>

//         <div className="project-card">
//           <h3>2. Blog Platform</h3>
//           <p>
//             A blog platform where users can create, edit, and delete blog posts. It includes features like 
//             comment sections and likes on posts.
//           </p>
//           <a href="https://github.com/yourusername/blog-platform" target="_blank" rel="noopener noreferrer">
//             GitHub Repo
//           </a>
//         </div>

//         <div className="project-card">
//           <h3>3. Personal Portfolio</h3>
//           <p>
//             A portfolio website showcasing my web development skills, projects, and contact information. Built 
//             using React.js and hosted on GitHub Pages.
//           </p>
//           <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
//             GitHub Repo
//           </a>
//         </div>

//         <div className="project-card">
//           <h3>4. Weather App</h3>
//           <p>
//             A weather forecasting app that provides real-time weather updates using OpenWeather API. 
//             Built with React and styled using CSS.
//           </p>
//           <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer">
//             GitHub Repo
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication and payment integration.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/kipngenohaaron/e-commerce'
  },
  {
    name: 'Learning Management System',
    description: 'A platform for online courses and assignments with real-time messaging.',
    tech: ['React.js', 'Express.js', 'PostgreSQL'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/kipngenohaaron/lms'
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.tech.join(', ')}</p>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
