import React, { Component } from "react";
import { stripHtml } from "string-strip-html";

class ProductItem extends Component {
  render() {
    // const { product } = this.props;
    // const { description } = stripHtml(product.description);

    return (
      <div className="product__card">
        <img
          style={{ width: "100%" }}
          className="product__image"
          src=""
          alt=""
        />
        <div className="product__info">
          <h4 className="product__name">Product name</h4>
          <p className="product__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            nostrum eveniet ipsum earum quaerat sed enim tenetur commodi?
            Laboriosam, ab!
          </p>
          <div className="product__details">
            <p className="badge badge-pill badge-primary product__price">$20</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
