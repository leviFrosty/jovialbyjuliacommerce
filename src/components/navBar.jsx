import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    toggle: true,
  };

  handeToggle = () => {
    const current = this.state.toggle;
    console.log(current);
    this.setState({ toggle: !current });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container d-flex flex-row flex-md-row justify-content-between">
            <Link class="py-2" to="/">
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
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.handeToggle}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={
                this.state.toggle
                  ? "collapse navbar-collapse"
                  : "navbar-collapse"
              }
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <NavLink
                  className="text-light nav-item nav-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#AA80FF",
                  }}
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-light nav-item nav-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#AA80FF",
                  }}
                  to="/products"
                >
                  Products
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#AA80FF",
                  }}
                  className="text-light nav-item nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#AA80FF",
                  }}
                  className="text-light nav-item nav-link"
                  to="/about"
                >
                  About Me
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
