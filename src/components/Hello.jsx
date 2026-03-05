function Hello(props) {
  const { name, contents } = props;
  return (
    <div>
      {contents} {name}
    </div>
  );
}
export default Hello;
