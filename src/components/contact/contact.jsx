import React from "react";
import "./contact.css";

import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/ig.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";

const Contact = () => {
  return (
    <div className="contact">

      <h2>Contact Me</h2>

      <div className="contact-cards">

        {/* Email */}
        <a
          href="mailto:mdhussain6291@gmail.com"
          className="contact-card"
        >
          <img src={email} alt="Email" className="contact-icon" />
          <p>Email</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+916291187834"
          className="contact-card"
        >
          <img src={phone} alt="Phone" className="contact-icon" />
          <p>Phone</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/md-hussain-13ba04328"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <img src={linkedin} alt="LinkedIn" className="contact-icon" />
          <p>LinkedIn</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hussain.noirl_"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <img src={instagram} alt="Instagram" className="contact-icon" />
          <p>Instagram</p>
        </a>

      </div>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" rows="4"></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
};

export default Contact;
