import React from "react";
import { ReactComponent as Lost } from "../images/undrawLost.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center flex-column align-items-center mb-5 mt-5 vh-100 position-relative">
      <div>
        <h1 className="text-center">Error 404</h1>
        <p className="text-center">
          You look lost. Here are some suggested links:
        </p>
      </div>
      <div>
        <Link className="btn btn-primary m-2" to="/home">
          Home
        </Link>
        <Link className="btn btn-primary m-2" to="/products">
          Products
        </Link>
        <Link className="btn btn-primary m-2" to="/contact">
          Contact
        </Link>
      </div>
      <Lost className="lost-image" />
    </div>
  );
};

export default NotFound;
