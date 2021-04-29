import { CopyrightTwoTone } from "@material-ui/icons";
import React, { Component } from "react";
import { stripHtml } from "string-strip-html";

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { result: description } = stripHtml(product.description);

    return (
      console.log(product),
      (
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
                <i class="fas fa-cart-plus"></i>
              </a>
            </div>
          </div>
        </React.Fragment>
      )
    );
  }
}

export default ProductCard;
