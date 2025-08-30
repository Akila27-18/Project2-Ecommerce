import React from "react";

// Default props for optional discount
const ProductCard = ({ title, price, isAvailable, discount = 0, imageSrc }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      {discount > 0 && <p>Discount: {discount}% OFF</p>}

      {isAvailable ? (
        <p className="available">In Stock</p>
      ) : (
        <p className="out-of-stock" style={{ color: "red" }}>
          Out of Stock
        </p>
      )}
    </div>
  );
};

// Default props in case no value for discount is passed
ProductCard.defaultProps = {
  discount: 0,
};

export default ProductCard;
