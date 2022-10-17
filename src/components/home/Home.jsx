import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="container">
      <div className="container__inscription">
        <h2>Welcome guests to our products site! Enjoy!</h2>
        <p>
          Do not forget to check on <Link to="/products">our products!</Link>{" "}
        </p>
      </div>
    </div>
  );
};
