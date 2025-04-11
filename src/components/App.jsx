import React from "react";
import ProductList from "./ProductList";
import "./App.css"; // Імпорт стилів

function App() {
  return (
    <div className="container">
      <h1 className="title">Магазин товарів</h1>
      <ProductList />
    </div>
  );
}

export default App;
