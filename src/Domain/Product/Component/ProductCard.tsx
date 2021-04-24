import React from "react";
import Product from "../Class/Product";

class ProductCard extends React.Component<Product> {
  render() {
    return (
      <div className="card has-background-white-bis">
        <div className="card-image">
          <figure className="image is-square">
            <img
              className="p-3"
              src={"images/drinks/" + this.props.imageUri}
              alt={this.props.description}
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title has-text-grey-darker has-text-centered is-size-5-mobile">{this.props.name}</p>
          <p className="subtitle has-text-danger has-text-weight-semibold has-text-centered is-size-6-mobile">
            ${(this.props.price / 100).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
