import React, { useState } from "react";
import { useForm } from "@formspree/react";
import loading from "../images/loading.gif";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvodzkqj");
  const [buttonText, setbuttonText] = useState("Send");
  if (state.succeeded) {
    return (
      <div>
        <h1>Thank you!</h1>
        <p>We will get back to you shortly.</p>
      </div>
    );
  }
  return (
    <form className="needs-validation" novalidate onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="John Doe"
        />
        <label for="name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <label for="email">Email address</label>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Enter your message"
          id="message"
          style={{ height: "100px" }}
        ></textarea>
        <label for="message">Message</label>
      </div>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        disabled={state.submitting}
      >
        {buttonText}
      </button>
      <div>
        {state.submitting && (
          <img className="contact-loading" src={loading} alt="loading..." />
        )}
      </div>
    </form>
  );
}

export default ContactForm;
