// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact-section">
//       <h2>Contact</h2>
//       <p>Feel free to reach out!</p>
//       <p><strong>Phone:</strong> 0724279400 / 0724828197</p>
//       <p><strong>Email:</strong> kipngenohaaron@gmail.com</p>
//       <form>
//         <label>Name:</label>
//         <input type="text" name="name" required />

//         <label>Email:</label>
//         <input type="email" name="email" required />

//         <label>Message:</label>
//         <textarea name="message" required></textarea>

//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

