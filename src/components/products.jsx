import React, { Component } from "react";
import { commerce } from ".././lib/commerce";
import Product from "./product";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */

  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({ products: products.data });
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default Products;
