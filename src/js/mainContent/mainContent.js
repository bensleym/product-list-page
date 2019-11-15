import React, { Component } from "react";
import ProductListerItem from "../productListerItem/ProductListerItem";
import productData from "./../../data/products";
import MainContentHeader from "./MainContentHeader";

class MainContent extends Component {
  state = { products: productData, gridView: true };

  handleLayout = () => {
    this.setState({
      gridView: !this.state.gridView
    });
  };

  sortBy = () => {
    let sortByValue = event.target.value;
    const product = this.state.products;

    product.sort((a, b) => {
      if (sortByValue === "priceAsc") {
        const productA = a["price"].toUpperCase();
        const productB = b["price"].toUpperCase();
        return productA < productB ? -1 : productA > productB ? 1 : 0;
      } else if (sortByValue === "priceDes") {
        const productA = a["price"].toUpperCase();
        const productB = b["price"].toUpperCase();
        return productA > productB ? -1 : productA < productB ? 1 : 0;
      } else {
        const productA = a["name"].toUpperCase();
        const productB = b["name"].toUpperCase();
        return productA < productB ? -1 : productA > productB ? 1 : 0;
      }
    });

    const { products } = this.state;
    this.setState({ products: [...products] });
  };

  render() {
    return (
      <main className="main-content">
        <section className="main-content__content">
          <div className="main-content__header">
            <MainContentHeader
              products={this.state}
              sortBy={this.sortBy}
              gridView={this.state.gridView}
              layoutToggle={this.handleLayout}
            />
          </div>
          <div className="main-content__product-lister">
            {this.state.products.map(product => (
              <ProductListerItem
                {...product}
                key={product._id}
                gridView={this.state.gridView}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default MainContent;
