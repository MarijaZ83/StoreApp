import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { useLocation } from "react-router";

export const ProductCard = ({
  product,
  addToCart,
  handleRemoveProduct,
  showDetails,
}) => {
  const location = useLocation();

  const raitingObject = product.rating;
  const raiting = Object.keys(raitingObject);

  const isPathNameNotCart = location.pathname !== "/cart";
  return (
    <div className="product">
      <h3 className="product__info">Product details: </h3>
      <p><b className="product__bolded">Product name: </b>{product.title}</p>
      <p><b className="product__bolded">Product description: </b>{product.description} </p>
      <p><b className="product__bolded">Product price:</b> {product.price}</p>
      <img className="product__image" src={product.image} alt={product.title} />

      {showDetails && (
        <Link to={`/product/${product.id}`}>
          <p><b className="product__bolded">Product details</b></p>{" "}
        </Link>
      )}

      {isPathNameNotCart && (
        <div onClick={() => addToCart(product)} className="product__add">
          {" "}
          Add to cart{" "}
        </div>
      )}

      <div
        className="product__add"
        onClick={() => handleRemoveProduct(product.id)}
      >
        {isPathNameNotCart ? "Remove product" : "Remove from cart"}
      </div>

      {raiting.map((value, index) => (
        <div key={index}>
          <p>
            {value}: {raitingObject[value]}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
