import React, { Component } from "react";

class Favourite extends Component {
  state = { ...this.props };

  handleClick = () => {
    this.setState({ isFav: !this.state.isFav });
  };

  render() {
    return (
      <p className="favourite" onClick={this.handleClick}>
        <span
          className={
            this.state.isFav
              ? "favourite__heart fas fa-heart"
              : "favourite__heart far fa-heart"
          }
        ></span>
      </p>
    );
  }
}

export default Favourite;
