import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import storeContext from "../../store-context/storeContext";
import "./AddProduct.scss";

export const AddProduct = () => {
  const { products, setProducts } = useContext(storeContext);

  const [product, addProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    rating: {},
  });

  const handleProductName = (e) => {
    const value = e.target.value;
    addProduct({
      ...product,
      title: value,
    });
  };

  const handleProductImage = (e) => {
    addProduct({
      ...product,
      image: e.target.value,
    });
  };

  const handleProductDescription = (e) => {
    addProduct({
      ...product,
      description: e.target.value,
    });
  };

  const handleProductPrice = (e) => {
    addProduct({
      ...product,
      price: e.target.value,
    });
  };

  const createProduct = (e) => {
    e.preventDefault();

    const productToBeCreated = { ...product, id: uuid() };

    console.log(productToBeCreated);
    setProducts([...products, productToBeCreated]);
    resetValues();
  };

  const resetValues = () => {
    addProduct({ title: "", image: "", description: "", price: "" });
  };
  return (
    <>
      <form onSubmit={createProduct} className="form">
        <h2>Add new product</h2>

        <label htmlFor="name" className="form__label">Name:</label>
        <input className="form__input"
          type="text"
          name="name"
          value={product.title || ""}
          onChange={handleProductName}
        />

        <label htmlFor="image" className="form__label">Image:</label>
        <input className="form__input"
          type="text"
          name="image"
          value={product.image || ""}
          onChange={handleProductImage}
        />

        <label htmlFor="description" className="form__label">Description:</label>
        <input className="form__input"
          type="text"
          name="description"
          value={product.description || ""}
          onChange={handleProductDescription}
        />

        <label htmlFor="price" className="form__label">Price:</label>
        <input className="form__input"
          type="number"
          name="price"
          value={product.price || ""}
          onChange={handleProductPrice}
        />
        
        <button className="form__btn">Add product</button>
      </form>
    </>
  );
};
