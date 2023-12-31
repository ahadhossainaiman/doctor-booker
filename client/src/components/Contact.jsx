import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  return (
    <section
      className="register-section flex-center"
      id="contact"
      style={{ backgroundColor: "#00B4CC" }}
    >
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">CONTACT US</h2>
        <form
          method="POST"
          action="https://formspree.io/f/xkneldwn"
          className="register-form "
        >
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>

          <button
            type="submit"
            className="btn form-btn"
            style={{ backgroundColor: "red" }}
          >
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
