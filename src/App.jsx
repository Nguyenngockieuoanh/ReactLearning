import React from "react";
import Products from "./components/Products";

function App() {
  const listProducts = [
    {
      url: "https://down-vn.img.susercontent.com/file/vn-11134258-81ztc-mlg2h0zvt9fn9b",
      title: "Product 1",
      price: 1000,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/vn-11134258-81ztc-mlg2h0zvt9fn9b",
      title: "Product 2",
      price: 1200,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/vn-11134258-81ztc-mlg2h0zvt9fn9b",
      title: "Product 3",
      price: 1300,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/vn-11134258-81ztc-mlg2h0zvt9fn9b",
      title: "Product 4",
      price: 1400,
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {listProducts.map((product, index) => {
        return (
          <Products
            title={product.title}
            price={product.price}
            url={product.url}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
