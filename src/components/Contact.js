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
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Feel free to reach out to me through the following channels:</p>
      <ul>
        <li>Email: kipngenohaaron@gmail.com</li>
        <li>Phone: 0724279400 / 0724828197</li>
      </ul>
    </section>
  );
};

export default Contact;
