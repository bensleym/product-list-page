import React, { Component } from "react";
import Star from "./Star";

class ProductDescription extends Component {
  state = { ...this.props, stars: [] };

  componentDidMount() {
    this.starCount();
  }

  starCount() {
    const starArr = [];
    for (let i = 0; i < this.state.rating; i += 1) {
      starArr.push([i]);
    }
    this.setState({ stars: starArr });
  }

  render() {
    return (
      <p className="product-description">
        {this.state.description}
        {this.state.stars.map(star => (
          <Star {...star} key={star} />
        ))}
      </p>
    );
  }
}

export default ProductDescription;
