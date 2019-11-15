import React, { Component } from "react";
import Favourite from "./productListerItemComponents/Favourite";
import ProductDescription from "./productListerItemComponents/ProductDescription";
import ProductTitle from "./productListerItemComponents/ProductTitle";
import ProductPrice from "./productListerItemComponents/ProductPrice";
import ProductImage from "./productListerItemComponents/ProductImage";
class ProductListerItem extends Component {
  render() {
    return (
      <article
        className={`product-lister-item ${
          this.props.gridView ? "" : "product-lister-item--list-view"
        }`}
      >
        <Favourite id={this.props._id} isFav={this.props.isFav} />
        <a href={this.props.url} className="product-lister-item__link">
          <ProductImage imageUrl={this.props.picture} />
          <div className="product-lister-item__content">
            <ProductTitle title={this.props.name} />
            <ProductDescription
              description={this.props.size}
              rating={this.props.rating}
            />
            <ProductPrice
              price={this.props.price}
              oldPrice={this.props.oldPrice}
              savings={this.props.savings}
            />
          </div>
        </a>
      </article>
    );
  }
}

export default ProductListerItem;
