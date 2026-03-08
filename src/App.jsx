import React from "react";
import Products from "./components/Products";
import Category from "./components/Category";
import NotCategory from "./components/NotCategory";

function App() {
  const isCategory = true;
  return <div>{isCategory ? <Category /> : <NotCategory />}</div>;
}

export default App;
