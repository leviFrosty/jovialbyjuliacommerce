import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import loading from "../images/loading.gif";
import checkSuccess from "../images/checkCircle.gif";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvodzkqj");
  if (state.succeeded) {
    return (
      <div className="d-flex justify-content-center flex-column mt-5">
        <div>
          <h1 className="text-center">
            <span>
              <img
                className="m-2"
                src={checkSuccess}
                alt="success"
                style={{ height: "3rem" }}
              />
            </span>
            Success!
          </h1>{" "}
        </div>
        <p className="text-center">We will get back to you shortly.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="name"
          type="name"
          name="name"
          placeholder="Name"
        />
        <label htmlFor="name">Name</label>
        <ValidationError field="name" prefix="Name" errors={state.errors} />
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="email">Email</label>
        <ValidationError field="email" prefix="Email" errors={state.errors} />
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          type="text"
          name="message"
          style={{ height: "150px" }}
          placeholder="Message"
        />
        <label className="form-label" htmlFor="email">
          Message
        </label>
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
        />
      </div>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        disabled={state.submitting}
      >
        Send
      </button>
      {state.submitting && (
        <img src={loading} alt="loading..." style={{ height: "50px" }} />
      )}
    </form>
  );
}

export default ContactForm;
