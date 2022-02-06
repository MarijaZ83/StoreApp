import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Products } from "./components/products/Products";
import { AddProduct } from "./components/add-product/AddProduct";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { NotFound } from "./components/NotFound";
import { EditProduct } from "./components/edit-product/EditProduct";
import { Cart } from "./components/cart/Cart";
import { StoreGlobalState } from "./store-context/StoreGlobalContextState";

function App() {
  return (
    <>
      <StoreGlobalState>
        <Router>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/add-product"} element={<AddProduct />} />
            <Route path={"/product/:id"} element={<ProductDetails />}>
              <Route path={"edit"} element={<EditProduct />} />
            </Route>
            <Route path={"/cart"} element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StoreGlobalState>
    </>
  );
}

export default App;
