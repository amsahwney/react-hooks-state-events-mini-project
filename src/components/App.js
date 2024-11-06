import React, { useCallback, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";
import { v4 as uuid } from 'uuid'

import { CATEGORIES, TASKS} from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState( TASKS )
  const [categories, setCategories] = useState( CATEGORIES )
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTasks = selectedCategory === "All"
  ? 
  tasks
  : 
  tasks.filter(task => task.category === selectedCategory); 

  const allTasks = filteredTasks.map(task => 
  <Task key={uuid()} todo={task} tasks={tasks} setTasks={setTasks} />)

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter categories = {categories} 
      selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>

      <NewTaskForm tasks = {tasks} setTasks = {setTasks} categories = {categories} allTasks = {allTasks}/>

      <TaskList tasks = {tasks} setTasks = {setTasks} selectedCategory= {selectedCategory} allTasks = {allTasks}/>

    </div>
  );
}

export default App;
