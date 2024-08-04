const TodoData = (props) => {
  //props là một Object {}
  // {
  //   name: "Nhu Lac",
  //   age: 1,
  //   data:{}
  // }

  const { name, age, data } = props;

  console.log("Check Props:", props);
  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      <div> Learning React </div>
      <div> Watching Youtube </div>
    </div>
  );
};

export default TodoData;
