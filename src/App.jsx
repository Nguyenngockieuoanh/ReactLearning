import React, { useState } from "react";
import Products from "./components/Products";
import Category from "./components/Category";

import Message from "./components/Message";

function App() {
  const [chosenProducrt, setChosenProduct] = useState(1);
  const product = [
    { id: 1, name: "Iphone 11" },
    { id: 2, name: "Iphone 12" },
    { id: 3, name: "Iphone 13" },
  ];

  const handleCheckValue = (id) => {
    setChosenProduct(id);
    console.log(id);
  };
  return (
    <div>
      <div>
        {product.map((product, index) => {
          return (
            <div key={index}>
              <label>{product.name}</label>
              <input
                type="radio"
                value={product.id}
                onChange={(e) => handleCheckValue(e.target.value)}
                checked={+chosenProducrt === product.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
