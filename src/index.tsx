import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bulma.css";
import ProductTable from "./Domain/Product/Component/ProductTable";
import reportWebVitals from "./reportWebVitals";
import drinks from "./drinks.json";

ReactDOM.render(
  <React.StrictMode>
    <ProductTable drinks={drinks} columns={4} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
