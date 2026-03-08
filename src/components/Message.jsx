export default function Message() {
  const handleClick = () => {
    alert("Hello World");
  };

  return (
    <div>
      <button onClick={handleClick}>click here</button>
    </div>
  );
}
