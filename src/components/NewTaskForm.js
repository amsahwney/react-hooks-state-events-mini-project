import React from "react";
import { useState } from "react"

function NewTaskForm( { tasks, setTasks, categories } ) {
  
  const [taskName,setTaskName] = useState('')
  const [taskCategory, setTaskCategory] = useState('Code')

  const handleAddTask = (event) => setTaskName(event.target.value)
  const handleAddCategory = (event) => setTaskCategory(event.target.value)

  function onTaskFormSubmit(event) {
    event.preventDefault()

    const newTask = {
      text: taskName,
      category: taskCategory
  }

  const updatedTaskList = [...tasks, newTask]
  setTasks(updatedTaskList)
  }
  
  return (
    <form className="new-task-form" onSubmit = { onTaskFormSubmit } >
      <label>
        Details
        <input type="text" name="text" onChange = { handleAddTask } value = { taskName } />
      </label>
      <label>
        Category
        <select name="category" onChange = { handleAddCategory } value ={ taskCategory } >
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
