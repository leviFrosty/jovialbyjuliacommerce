import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-dark bg-dark site-header sticky-top py-1">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <a class="py-2" href="#">
              <svg
                style={{ height: "25px", width: "25px" }}
                id="Capa_1"
                enable-background="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="J_2_">
                  <path
                    d="m421.03 0v315.75c0 120.376-43.211 194.086-165 196.2-1.79.03-3.6.05-5.43.05-175.74 0-158.26-177.87-159.63-182.24l118.65-13.7c2.78 12.38-8.14 84.49 44.17 84.49.76 0 1.51-.01 2.24-.02 32.702-.634 40.65-15.582 40.65-78.67v-321.86z"
                    fill="#c68cff"
                  />
                  <path
                    d="m421.03 0v315.75c0 120.376-43.211 194.086-165 196.2v-111.42c32.702-.634 40.65-15.582 40.65-78.67v-321.86z"
                    fill="#aa80ff"
                  />
                </g>
              </svg>
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Tour
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Product
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Features
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Enterprise
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Support
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Pricing
            </a>
            <a class="nav-link py-2 d-none d-md-inline-block" href="#">
              Cart
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
