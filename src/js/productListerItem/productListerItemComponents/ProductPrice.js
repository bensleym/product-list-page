import React, { Component } from "react";

class ProductPrice extends Component {
  state = { ...this.props };

  priceSaving = () => {
    if (this.state.savings) {
      return (
        <span>
          <span className="product-price__pre-price">
            {this.state.oldPrice}
          </span>{" "}
          <span className="product-price__save-price">
            You save {this.state.savings}
          </span>
        </span>
      );
    }
    return null;
  };
  render() {
    return (
      <p className="product-price">
        {this.state.price} {this.priceSaving()}
      </p>
    );
  }
}

export default ProductPrice;
