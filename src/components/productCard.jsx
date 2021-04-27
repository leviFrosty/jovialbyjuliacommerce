import React, { Component } from "react";
import { stripHtml } from "string-strip-html";

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { description } = stripHtml(product.description);

    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.media.source}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Add to card
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductCard;
