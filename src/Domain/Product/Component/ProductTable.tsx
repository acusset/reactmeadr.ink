import React from "react";
import Product from "../Class/Product";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component<{
  drinks: Product[];
  columns: number;
}> {
  size = this.props.drinks.length;
  rows = Math.round(this.props.drinks.length / this.props.columns);

  test: Function = (drinks: [], rows: number, column: number): any => {
    let list = [];
    for (let i = 0; i < rows; i++) {
      list.push(<ProductRow drinks={drinks.slice(i * column, column + (i * column))} />);
    }
    return list;
  };

  render() {
    return (
      <div>{this.test(this.props.drinks, this.rows, this.props.columns)}</div>
    );
  }
}

export default ProductTable;
