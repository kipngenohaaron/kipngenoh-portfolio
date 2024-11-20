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
    },
    {
      title: "Personal Portfolio Website",
      technologies: "HTML, CSS, JavaScript",
      description: `
        Designed and developed a modern, responsive website to showcase professional skills and accomplishments.
        Implemented optimized layouts for cross-device compatibility using responsive design principles.`,
    },
    {
      title: "Hostel Management System",
      technologies: "Visual Basic, MySQL",
      description: `
        Led a team to create a system for managing hostel operations, including room allocations and tenant records.
        Delivered a reliable, database-backed solution improving operational efficiency.`,
    },
    {
      title: "Cratex Supermarket Website",
      technologies: "HTML, CSS, JavaScript",
      description: `
        Collaborated on the design of a responsive website for a local business, incorporating features such as image galleries and contact forms.`,
    },
    {
      title: "Data Structures and Algorithms Visualizer",
      technologies: "Python",
      description: `
        Built an interactive Python-based tool to visualize complex data structures and algorithms, enhancing the learning experience for students and peers.`,
    },
    {
      title: "Online Coding Challenge Platform",
      technologies: "Python, Flask",
      description: `
        Developed a secure platform offering users coding challenges with features like user authentication and challenge submissions.`,
    },
    {
      title: "Airline Ticket Booking System",
      technologies: "ReactJS, JavaScript, HTML, CSS",
      description: `
        Designed a responsive, user-centric ticket booking system for an airline, simplifying the reservation process.`,
    },
    {
      title: "NourishNow - Food Distribution System",
      technologies: "Vite, ReactJS",
      description: `
        Contributed to developing a frontend interface for a food distribution system, optimizing resources to reduce food waste and support vulnerable communities.`,
    },
    {
      title: "Bookstore Management System",
      technologies: "SQL, Django",
      description: `
        Created a comprehensive system for bookstore inventory management, sales tracking, and customer engagement.`,
    },
    {
      title: "Restaurant Management System",
      technologies: "Python, SQL",
      description: `
        Designed a backend-focused system for efficient menu and order management for restaurants.`,
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
