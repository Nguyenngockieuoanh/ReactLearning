import React from "react";
import MyFooter from "./components/Footer";
import MyHeader from "./components/header";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Hello name="Alice" contents="Hello, Alice!" />
      <Hello name="Bob" contents="Ni hao, Bob!" />
      <Hello name="Charlie" contents="Hola, Charlie!" />
      <Hello name="David" contents="Xin chao, David!" />
      <Hello name="Eve" contents="Hello, Eve!" />
      <MyFooter />
    </>
  );
}

export default App;
