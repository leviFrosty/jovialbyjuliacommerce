import React from "react";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Features from "./components/features";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Features />
    </React.Fragment>
  );
};

export default App;
