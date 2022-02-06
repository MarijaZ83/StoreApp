import React, { useContext } from "react";
import storeContext from "../../store-context/storeContext";
import { ProductCard } from "../product-card/ProductCard";
import "./Cart.scss";

export const Cart = () => {
  const { cart, handleRemoveFromCart } = useContext(storeContext);
  return (
    <div className="cart">
      <div>
        <h2> Products in your cart</h2>
      </div>
      <div className="cart__container">
        {!!cart.length ? (
          cart.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showDetails={true}
              handleRemoveProduct={handleRemoveFromCart}
            />
          ))
        ) : (
          <h1>Nothing in the cart </h1>
        )}
      </div>
    </div>
  );
};
