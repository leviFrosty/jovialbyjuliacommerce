import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#E5E1EA" }}>
      <div class="position-relative overflow-hidden p-3 p-md-5 text-center hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal">Handmade Jewerly</h1>
          <p class="lead font-weight-normal">
            made at the expense of Julia's poor fingers and your wallet.
          </p>
          <a class="btn btn-outline-dark" href="#">
            See Products
          </a>
        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    </div>
  );
};

export default Hero;
