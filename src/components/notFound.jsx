import React from "react";
import { ReactComponent as Lost } from "../images/undrawLost.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center mb-5 mt-5">
      <div>
        <Lost />
      </div>
      <div>
        <h1 className="text-center">Lost?</h1>
        <Link className="btn btn-primary m-2" to="/home">
          Home
        </Link>
        <Link className="btn btn-primary m-2" to="/home">
          Home
        </Link>
        <Link className="btn btn-primary m-2" to="/home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
