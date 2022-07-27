import { useState } from "react";
import AddToDo from "./components/AddToDo";
import Like from "./components/Like";
import Pass from "./components/Pass";
import TodoList from "./components/TodoList";

function App() {
  const users = ["person1", "person2"];
  const [todos, setTodos] = useState([]);
  console.log(todos);
  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
    localStorage.setItem("obj", JSON.stringify(newObj));
  }
  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  }
  return (
    <>
      {/* <Like />
      <Pass /> */}
      <AddToDo handleTask={handleTask} />
      <TodoList todos={todos} changeStatus={changeStatus} users={users} />
    </>
  );
}

export default App;
