import React from "react";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/footer";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </React.Fragment>
  );
};

export default App;
