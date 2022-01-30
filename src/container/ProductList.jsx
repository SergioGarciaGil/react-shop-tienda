import React from "react";
import ProductItem from "../components/ProductItem.jsx";
import "../styles/ProductItem.css";

function ProductList() {
  return (
    <section className="main-container">
      <div className="productList">
        <ProductItem />
      </div>
    </section>
  );
}

export default ProductList;
