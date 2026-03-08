export default function Category() {
  const listCategory = ["Phone", "Laptop", "Tablet"];
  const handleClick = (name) => {
    console.log("môn 1:", name);
  };

  return (
    <ul>
      List category
      {listCategory.map((Category, index) => {
        return (
          <button key={index} onClick={() => handleClick(Category)}>
            {Category}
          </button>
        );
      })}
    </ul>
  );
}
