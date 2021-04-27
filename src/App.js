import React from "react";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/footer";
import Products from "./components/products";
import ProductCard from "./components/productCard";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Features />
      <Products />
      <Footer />
    </React.Fragment>
  );
};

export default App;
