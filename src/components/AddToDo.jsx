import React, { useState } from "react";

const AddToDo = (props) => {    
  const [task, setTask] = useState("");
  //   console.log(task);
  const handleAdd = () => {
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    console.log(newTask);
    props.handleTask(newTask);
    setTask("");
  };
  const handleInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleInput} value={task} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default AddToDo;
