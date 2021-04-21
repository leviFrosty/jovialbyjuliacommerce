import React from "react";

const Footer = () => {
  const dateobj = new Date();
  var year = dateobj.getFullYear();

  return (
    <React.Fragment>
      <footer className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="text-center text-light">Features</h5>
              <ul className="d-flex flex-column justify-content-center list-unstyled btn text-small">
                <li>
                  <a className="btn text-muted" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5 className="text-center text-light">Resources</h5>
              <ul className="d-flex flex-column justify-content-center list-unstyled btn text-small">
                <li>
                  <a className="btn text-muted" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5 className="text-center text-light">Resources</h5>
              <ul className="d-flex flex-column justify-content-center list-unstyled btn text-small">
                <li>
                  <a className="btn text-muted" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5 className="text-center text-light">About</h5>
              <ul className="d-flex flex-column justify-content-center list-unstyled btn text-small">
                <li>
                  <a className="btn text-muted" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="btn text-muted" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <small class="d-block mb-3 text-muted">
              Jovial by Julia &copy; {year}
            </small>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
