export default function Products({ title, price, url }) {
  console.log(title, price, url);
  return (
    <div>
      <div>{title}</div>
      <div>${price.toFixed(2)}</div>
      <div>
        <img src={url} style={{ width: "120px", height: "120px" }} />
      </div>
    </div>
  );
}
