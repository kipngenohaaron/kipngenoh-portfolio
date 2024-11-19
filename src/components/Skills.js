// import React from 'react';

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section">
//       <h2>Skills</h2>
//       <ul>
//         <li>React</li>
//         <li>Node.js</li>
//         <li>MongoDB</li>
//         <li>Express.js</li>
//         <li>JavaScript (ES6+)</li>
//         <li>HTML5 & CSS3</li>
//         <li>Python</li>
//         <li>SQL (MySQL, PostgreSQL)</li>
//         <li>Git & GitHub</li>
//         <li>Responsive Web Design</li>
//         <li>API Development (REST, GraphQL)</li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';

const Skills = () => {
  const skills = {
    'Front-End': ['React', 'HTML', 'CSS', 'JavaScript'],
    'Back-End': ['Node.js', 'Django', 'PHP'],
    'Tools': ['Git', 'VS Code', 'Postman']
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.keys(skills).map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
