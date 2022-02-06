import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import storeContext from "../../store-context/storeContext";
import { ProductCard } from "../product-card/ProductCard";
import "./ProductDetails.scss";

export const ProductDetails = () => {
  const params = useParams();
  const { addToCart } = useContext(storeContext);
  const { id } = params;

  const [product, setProduct] = useState({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {},
    title: "",
  });

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
    const product = await response.json();

    setProduct(product);
  };

   useEffect(() => {
      const interval = setInterval(() => {

      }, 2000);
     fetchSingleProduct(id);

    return () => {
       clearInterval(interval);
     };
   }, [id]);

  return (
    <div>
      <div className="details">
      <Link to={"/products"}>
        <p className="link__back">Go back to all products</p>
      </Link>

        {product.title ? (
          <ProductCard
            product={product}
            addToCart={addToCart}
            showDetails={false}
          />
        ) : (
          <p>Loading...</p>
        )}

        <Link to={"/products"}>
          <p className="link__back">Go back to all products</p>
        </Link>

      </div>
      <Outlet />
    </div>
  );
};
