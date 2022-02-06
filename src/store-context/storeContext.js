import React from "react";

export default React.createContext({
  products: [],
  pageNumber: null,
  filteredName: "",
  cart: [],
  setProducts: () => {},
  handleFilterName: () => {},
  handlePageNumber: () => {},
  handleRemoveProduct: () => {},
  filteredProducts: () => {},
  addToCart: () => {},
  handleRemoveFromCart: () => {},
});
