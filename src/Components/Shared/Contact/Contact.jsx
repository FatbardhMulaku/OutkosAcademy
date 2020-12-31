import React from "react";
import "./Contact.scss";
import ContactForm from "../Form/Contact";
const Contact = () => {
  return (
    <div className="contact">
      <h2 className="sub-title line-up">Contact</h2>

      <div className="main-container">
        <div className="container">
          <div className="img"></div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
