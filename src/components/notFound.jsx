import React from "react";
import { ReactComponent as Lost } from "../images/undrawLost.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center flex-column align-items-center mb-5 mt-5">
      <div>
        <h1 className="text-center">Oops, lost?</h1>
        <Lost />
      </div>
      <div>
        <Link className="btn btn-primary m-2" to="/home">
          Home
        </Link>
        <Link className="btn btn-primary m-2" to="/products">
          Products
        </Link>
        <Link className="btn btn-primary m-2" to="/home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
