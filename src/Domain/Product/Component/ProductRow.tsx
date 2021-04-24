import React from "react";
import Product from "../Class/Product";
import ProductCard from "./ProductCard";

class ProductRow extends React.Component<{ drinks: Product[] }> {
  list = this.props.drinks.map((product) => {
    return (
      <div
        key={product.imageUri}
        className="column is-half-mobile is-one-quarter-desktop"
      >
        <ProductCard
          name={product.name}
          price={product.price}
          description={product.description}
          imageUri={product.imageUri}
        />
      </div>
    );
  });

  render() {
    return (
      <div className="columns is-variable is-1-mobile is-2-desktop is-mobile">
        {this.list}
      </div>
    );
  }
}

export default ProductRow;
