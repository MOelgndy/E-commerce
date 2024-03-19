"use client";
import React, { useEffect, useState } from "react";
import { apis } from "./utilts/getAllProducts";
import Card from "./Card";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsData();
  }, []);
  const getProductsData = () => {
    apis.getProducts("products?populate=*").then((product) => {
      console.log(product.data.data);
      setProducts(product.data.data);
    });
  };

  return (
    <div className="grid gap-5 p-10">
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
