import "./Components-main/todo/todo.css";
import TodoData from "./Components-main/todo/TodoData";
import TodoNew from "./Components-main/todo/TodoNew";
import logoReact from "./assets/react.svg";

//Tạo một component
const App = () => {
  const nhuLac = "My Son";
  const age = 1;
  const data = {
    address: "hanoi",
    country: "vietnam",
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData name={nhuLac} age={age} data={data} />
      <div className="todo-image">
        <img className="logo" src={logoReact} alt="" />
      </div>
    </div>
  );
};

export default App;
