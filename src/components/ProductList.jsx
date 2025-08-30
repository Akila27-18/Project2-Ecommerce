import React from "react";
import ProductCard from "./ProductCard";

// Sample product data with image URLs
const products = [
  {
    title: "Laptop",
    price: 999.99,
    isAvailable: true,
    discount: 10,
    imageSrc: "./src/assets/laptop.jpg", // Placeholder image URL
  },
  {
    title: "Smartphone",
    price: 599.99,
    isAvailable: false,
    discount: 5,
    imageSrc: "./src/assets/smartphone.jpg", // Placeholder image URL
  },
  {
    title: "Headphones",
    price: 199.99,
    isAvailable: true,
    imageSrc: "./src/assets/headphone.jpg", // Placeholder image URL
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
