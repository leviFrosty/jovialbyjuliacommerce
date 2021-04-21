import React from "react";

const Features = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#E5E1EA" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div class="my-3 py-3">
                  <h2 class="display-5">Another headline</h2>
                  <p class="lead">And an even wittier subheading.</p>
                </div>
                <div
                  class="bg-light box-shadow mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    borderRadius: "21px 21px 0 0",
                  }}
                ></div>
              </div>
            </div>
            <div class="col">
              <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 p-3">
                  <h2 class="display-5">Another headline</h2>
                  <p class="lead">And an even wittier subheading.</p>
                </div>
                <div
                  class="bg-dark box-shadow mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    borderRadius: "21px 21px 0 0",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
