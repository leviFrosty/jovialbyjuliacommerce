import React from "react";
import Test from "./components/test";
import NavBar from "./components/navBar";
import Hero from "./components/hero";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Test />
    </React.Fragment>
  );
};

export default App;
