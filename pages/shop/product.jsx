import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [rating, setRating] = useState(0);

  const cartItemCount = cartItems[id];

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <div>
          <span>Rating:</span>
          <span>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                onClick={() => handleRatingChange(i + 1)}
                style={{
                  cursor: "pointer",
                  color: i < rating ? "gold" : "gray",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
            ))}
          </span>
        </div>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
