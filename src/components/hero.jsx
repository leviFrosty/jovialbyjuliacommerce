import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#E5E1EA" }}>
      <div class="position-relative overflow-hidden p-3 p-md-5 text-center hero vh-100 d-flex flex-column justify-content-center">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal">Handmade Jewerly</h1>
          <p class="lead font-weight-normal">
            made at the expense of Julia's poor fingers and your wallet.
          </p>
          <Link class="btn btn-outline-dark fw-bold" to="/products">
            See Products
          </Link>
        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    </div>
  );
};

export default Hero;
