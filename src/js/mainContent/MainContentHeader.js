import React, { Component } from "react";

class MainContentHeader extends Component {
  state = { ...this.props };

  toogleLayoutButton = () => {
    this.setState({ gridView: !this.state.gridView });
    this.state.layoutToggle();
  };

  render() {
    return (
      <div className="main-content-header">
        <p className="main-content-header__amount">
          {this.state.products.products.length} results
        </p>
        <div className="main-content-header__options">
          <span
            className={`main-content-header__list-view fas fa-th-list ${
              this.state.gridView ? "" : "active"
            }`}
            onClick={this.toogleLayoutButton}
          ></span>
          <select
            className="main-content-header__select"
            name="sortBy"
            id="sortBy"
            defaultValue=""
            onChange={this.state.sortBy}
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="priceAsc">Price Ascending</option>
            <option value="priceDes">Price Descending</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    );
  }
}

export default MainContentHeader;
