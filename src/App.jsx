import React from "react";
import Products from "./components/Products";
import Category from "./components/Category";
import NotCategory from "./components/NotCategory";

function App() {
  const isRenderCategory = false;
  if (isRenderCategory) {
    return (
      <div>
        <Category />
      </div>
    );
  } else {
    return (
      <div>
        <NotCategory />
      </div>
    );
  }
}

export default App;
