import React, { useState, useEffect } from "react";
import StoreContext from "./storeContext";
import { paginateArray } from "../utils/pagination";

export const StoreGlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredName, setFilterName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    console.log(result);
    setProducts(result);
  };

  useEffect(() => {
    console.log("Component did mount");
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("New product is pushed to the cart list");
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    const filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  const handleFilterName = (e) => {
    const value = e.target.value;
    setFilterName(value.trim().toLowerCase());
  };

  const handlePageNumber = (increment) => {
    increment ? setPageNumber(pageNumber + 1) : setPageNumber(pageNumber - 1);
  };

  const handleRemoveProduct = (id) => {
    const filteredArray = products.filter((product) => product.id !== id);
    setProducts(filteredArray);
  };

  const filteredProducts = () => {
    return paginateArray(
      products.filter((product) =>
        product.title.trim().toLowerCase().includes(filteredName)
      ),
      4,
      pageNumber
    );
  };
  return (
    <StoreContext.Provider
      value={{
        products: products,
        filteredName: filteredName,
        pageNumber: pageNumber,
        cart: cart,
        addToCart: addToCart,
        handleFilterName: handleFilterName,
        handlePageNumber: handlePageNumber,
        handleRemoveProduct: handleRemoveProduct,
        setProducts: setProducts,
        filteredProducts: filteredProducts,
        handleRemoveFromCart: handleRemoveFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
