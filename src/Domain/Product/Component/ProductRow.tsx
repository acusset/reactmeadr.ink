import React from "react";
import Product from "../Class/Product";
import ProductCard from "./ProductCard";

class ProductRow extends React.Component<{ drinks: Product[] }> {
  list = this.props.drinks.map((product) => {
    return (
      <div className="column is-3">
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
    return <div className="columns">{this.list}</div>;
  }
}

export default ProductRow;
