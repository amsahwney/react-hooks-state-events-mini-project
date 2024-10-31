import React from "react";
import { useState } from "react";

function Task( { todo, tasks, setTasks } ) {

  function handleDelete() {
    setTasks(tasks.filter(eachTask => eachTask !== todo))
  }

  return (
    <div className="task">
      <div className="label">{todo.category}</div>
      <div className="text">{todo.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
