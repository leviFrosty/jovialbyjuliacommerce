import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/footer";
import Products from "./components/products";
import NotFound from "./components/notFound";
import ContactUs from "./components/contact";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/home" component={Hero} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
