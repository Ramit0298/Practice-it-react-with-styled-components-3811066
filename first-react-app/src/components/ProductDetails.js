import React, { useState, useEffect } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  // const product = {
  //   name: "React T-Shirt",
  //   price: "$19.99",
  //   image: "react-tshirt.jpg",
  // };

  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then(setProduct)
      .catch((e) => console.error("Error fetching data", e));
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ProductImage imageUrl={product.image} />
      <ProductInfo name={product.name} price={product.price} />
    </div>
  );
};

export default ProductDetails;
