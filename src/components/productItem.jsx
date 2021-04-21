import React, { Component } from "react";
import stripHtml from "string-strip-html";

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    const { description } = stripHtml(product.description);

    return (
      <div className="product__card">
        <img
          className="product__image"
          src={product.media.source}
          alt={product.name}
        />
        <div className="product__info">
          <h4 className="product__name">{product.name}</h4>
          <p className="product__description">{description}</p>
          <div className="product__details">
            <p className="badge badge-pill badge-primary product__price">
              {product.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
