function Hello(props) {
  console.log(props);
  return <div>name: {props.getName()}</div>;
}
export default Hello;
