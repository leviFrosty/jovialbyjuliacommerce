import React, { Component } from "react";
import { commerce } from ".././lib/commerce";
import { toast } from "react-toastify";
import ProductCard from "./productCard";
import ProductItem from "./productItem";

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
        console.error("There was an error fetching the products", error);
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default Products;
