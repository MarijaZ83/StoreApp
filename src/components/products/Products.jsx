import React, { useContext } from "react";
import storeContext from "../../store-context/storeContext";
import { ProductCard } from "../product-card/ProductCard";
import "./Products.scss";

export const Products = () => {
  const context = useContext(storeContext);

  const { handleFilterName, handleRemoveProduct, handlePageNumber, addToCart } =
    context;

  return (
    <div className="container">
      <div className="container__filter">
        <input
          type="text"
          placeholder="Search Product"
          className="container__filter-input"
          onChange={handleFilterName}
        />
      </div>
      <div className="products">
        {!!context.products.length ? (
          context
            .filteredProducts()
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showDetails={true}
                addToCart={addToCart}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))
        ) : (
          <h3>No products in the list</h3>
        )}
      </div>

      <div className="container__navigation">
        <h1 onClick={() => handlePageNumber(false)}>Previous</h1>
        <h1 onClick={() => handlePageNumber(true)}>Next</h1>
      </div>
    </div>
  );
};
