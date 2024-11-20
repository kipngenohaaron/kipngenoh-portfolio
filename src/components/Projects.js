import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Kibera 8 Slum Safaris Tour",
      technologies: "Django, ReactJS, PostgreSQL, Redux Toolkit",
      description: `
        Developed an ethical donation platform for slum tours, empowering local residents.
        Integrated secure payment gateways (PayPal, Stripe) and built user-friendly interfaces for donors and organizations.
        Focused on security, usability, and sustainability in implementation.`,
      github: "https://github.com/yourusername/kibera-slum-safaris",
      live: "https://kibera-slum-safaris.example.com",
    },
    {
      title: "Personal Portfolio Website",
      technologies: "HTML, CSS, JavaScript",
      description: `
        Designed and developed a modern, responsive website to showcase professional skills and accomplishments.
        Implemented optimized layouts for cross-device compatibility using responsive design principles.`,
      github: "https://github.com/yourusername/portfolio-website",
      live: "https://yourportfolio.example.com",
    },
    {
      title: "Hostel Management System",
      technologies: "Visual Basic, MySQL",
      description: `
        Led a team to create a system for managing hostel operations, including room allocations and tenant records.
        Delivered a reliable, database-backed solution improving operational efficiency.`,
      github: "https://github.com/yourusername/hostel-management",
    },
    {
      title: "Cratex Supermarket Website",
      technologies: "HTML, CSS, JavaScript",
      description: `
        Collaborated on the design of a responsive website for a local business, incorporating features such as image galleries and contact forms.`,
      github: "https://github.com/yourusername/cratex-website",
      live: "https://cratex.example.com",
    },
    {
      title: "Data Structures and Algorithms Visualizer",
      technologies: "Python",
      description: `
        Built an interactive Python-based tool to visualize complex data structures and algorithms, enhancing the learning experience for students and peers.`,
      github: "https://github.com/yourusername/dsa-visualizer",
    },
    {
      title: "Online Coding Challenge Platform",
      technologies: "Python, Flask",
      description: `
        Developed a secure platform offering users coding challenges with features like user authentication and challenge submissions.`,
      github: "https://github.com/yourusername/coding-challenges",
    },
    {
      title: "Airline Ticket Booking System",
      technologies: "ReactJS, JavaScript, HTML, CSS",
      description: `
        Designed a responsive, user-centric ticket booking system for an airline, simplifying the reservation process.`,
      github: "https://github.com/yourusername/airline-booking",
      live: "https://airline-booking.example.com",
    },
    {
      title: "NourishNow - Food Distribution System",
      technologies: "Vite, ReactJS",
      description: `
        Contributed to developing a frontend interface for a food distribution system, optimizing resources to reduce food waste and support vulnerable communities.`,
      github: "https://github.com/yourusername/nourishnow",
    },
    {
      title: "Bookstore Management System",
      technologies: "SQL, Django",
      description: `
        Created a comprehensive system for bookstore inventory management, sales tracking, and customer engagement.`,
      github: "https://github.com/yourusername/bookstore-management",
    },
    {
      title: "Restaurant Management System",
      technologies: "Python, SQL",
      description: `
        Designed a backend-focused system for efficient menu and order management for restaurants.`,
      github: "https://github.com/yourusername/restaurant-management",
    },
    {
      title: "E-Learning Platform Implementation",
      technologies: "Customizable LMS",
      description: `
        Spearheaded the deployment of an e-learning platform to support distance education, customizing it to meet institutional needs and delivering educator training.`,
    },
    {
      title: "Flatdango Movie Theatre",
      technologies: "ReactJS, HTML, CSS",
      description: `
        Enhanced the user experience for a modern cinema chain by creating an online ticket booking feature and optimizing customer engagement.`,
      github: "https://github.com/yourusername/flatdango",
    },
    {
      title: "ICT Integration in Curriculum Development",
      technologies: "Multimedia Tools",
      description: `
        Collaborated with educators to introduce ICT tools, creating interactive multimedia materials for enhanced teaching and learning outcomes.`,
    },
    {
      title: "Network Troubleshooting Simulation",
      technologies: "Custom Software",
      description: `
        Developed a hands-on simulation platform for students to learn and practice diagnosing network issues, fostering critical problem-solving skills.`,
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
