import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuid } from 'uuid'


function TaskList( { tasks, setTasks } ) {
  const allTasks = tasks.map(task => <Task key={uuid()} todo={task} tasks={tasks} setTasks={setTasks}/>)
  
  return (
    <div className="tasks">
        { allTasks }
    </div>
  );
}

export default TaskList;
