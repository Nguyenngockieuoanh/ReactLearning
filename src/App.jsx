import React, { useState } from "react";
import Products from "./components/Products";
import Category from "./components/Category";

import Message from "./components/Message";

function App() {
  const [count, setcount] = useState(() => {
    const number = 1 + 1 + 1;
    return number;
  });
  console.log("sss");
  const handleClick = () => {
    setcount((prev) => prev + 1);
  };

  return (
    <>
      <div>count : {count}</div>
      <button onClick={handleClick}>Click here</button>
    </>
  );
}

export default App;
