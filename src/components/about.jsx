import React from "react";
import Julia from "../images/juliaHeadShot.jpg";

const About = () => {
  return (
    <React.Fragment>
      <div className="container d-flex flex-column align-items-center my-5">
        <div>
          <h1>About Me</h1>
        </div>
        <div>
          <div className="row  my-5">
            <div className="col">
              <img className="img-fluid" src={Julia} alt="julia" />
            </div>
            <div className="col">
              <h2>My name is Julia...</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti a modi quod dignissimos placeat omnis possimus et
                officiis saepe animi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
