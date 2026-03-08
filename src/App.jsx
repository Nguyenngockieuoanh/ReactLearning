import React, { useState } from "react";
import Products from "./components/Products";
import Category from "./components/Category";

import Message from "./components/Message";

function App() {
  const colors = ["#FF0", "#00F", "#F0F"];

  const [color, setcolor] = useState("#FF0");

  const handleChangeColor = (index) => {
    console.log(index);
    setcolor(colors[index]);
  };

  return (
    <div>
      <div
        style={{
          background: color,
          margin: "20px",
          width: "70px",
          height: "20px",
        }}
      ></div>

      <div>
        <button onClick={() => handleChangeColor(0)}>Red</button>
        <button onClick={() => handleChangeColor(1)}>Blue</button>
        <button onClick={() => handleChangeColor(2)}>Pink</button>
      </div>
    </div>
  );
}

export default App;
