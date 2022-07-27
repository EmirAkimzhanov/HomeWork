import React from "react";

const TodoList = (props) => {
  console.log(props);
  const locItem = JSON.parse(localStorage.getItem("obj"));
  console.log(locItem.task);
  return (
    <div>
      TodoList
      {props.todos.map((e) => (
        <li key={e.id} className={e.status ? "completed" : "notcompleted"}>
          <input
            type="checkbox"
            onChange={() => props.changeStatus(e.id)}
            name=""
            id=""
          />
          {e.task}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
