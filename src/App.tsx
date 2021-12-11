import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Orange", count: 6 }} />
      <ProductCounter product={{ productName: "Apple", count: 1 }} />
      <ProductCounter product={{ productName: "Carrot", count: 9 }} />
      <ProductCounter product={{ productName: "Pineapple", count: 4 }} />
      <ProductCounter product={{ productName: "Tomato", count: 7 }} />
    </div>
  );
};

export default App;
