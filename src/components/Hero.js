// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="hero" className="hero-section">
//       <h2>Welcome to My Portfolio</h2>
//       <p>I am a passionate Software Developer & ICT Trainer.</p>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-pic"
      />
      <h1>Hi, I'm Kipngenoh Aaron</h1>
      <p>A passionate ICT trainer and software developer.</p>
      <a href="#contact" className="cta">Contact Me</a>
    </section>
  );
};

export default Hero;
