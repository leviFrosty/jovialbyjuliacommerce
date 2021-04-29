import React from "react";
import ContactForm from "./contactForm";
import { ReactComponent as Contact } from "../images/undrawContact.svg";
import "../css/styles.css";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="container vh-100 d-flex flex-column justify-content-center">
        <div>
          <h1 className="text-center mb-5 fs-1 fw-bold">Contact Me!</h1>
        </div>
        <div className="px-5 contact-form">
          <ContactForm />
        </div>
      </div>
      <Contact className="contact-image" />
    </React.Fragment>
  );
};

export default ContactUs;
