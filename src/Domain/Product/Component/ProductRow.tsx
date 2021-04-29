import React from "react";
import Product from "../Class/Product";
import ProductCard from "./ProductCard";

class ProductRow extends React.Component<{ drinks: Product[] }> {
  list = this.props.drinks.map((product) => {
    return (
      <div
        key={product.imageUri}
        className="column is-2-fullhd is-one-fifth-widescreen is-one-quarter-desktop is-one-third-tablet is-half-mobile"
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
    return <div className="columns is-mobile is-multiline is-variable is-2">{this.list}</div>;
  }
}

export default ProductRow;
