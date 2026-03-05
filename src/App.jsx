import React from "react";
import MyFooter from "./components/Footer";
import MyHeader from "./components/header";
import Hello from "./components/Hello";

function App() {
  const name = "Kieu Oanh";
  const getName = () => {
    return name;
  };
  return (
    <>
      <Hello getName={getName} />
    </>
  );
}

export default App;
