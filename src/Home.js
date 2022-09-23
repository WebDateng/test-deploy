import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Home = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to={"/products"} className="App-link">
            Products
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Home;
