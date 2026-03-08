import React from "react";
import Products from "./components/Products";
import Category from "./components/Category";
import NotCategory from "./components/NotCategory";

function App() {
  const courses = [
    { name: "JavaScript", price: "1000" },
    { name: "ReactJS", price: "1500" },
    { name: "NodeJS", price: "1200" },
    { name: "Cooking", price: "800" },
    { name: "Baking", price: "600" },
  ];
  return (
    <ul>
      {courses.map((course, index) => {
        return (
          <React.Fragment key={index}>
            {course.price >= 1000 ? (
              <li>
                Tên khóa học: {course.name} - Giá: {course.price}
              </li>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default App;
