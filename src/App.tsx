import React from 'react';
import './App.css';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { Task } from './Interface';
import ToDoTask from './components/toDoTask';


function App() {

  //State Variables
  const [task,setTask]=useState<string>("");
  const [deadLine,setDeadLine]=useState<number>(0);
  const [toDoList,setToDoList]=useState<Task[]>([]);


  //Function to handleChange in inputs
  const handleChange=(event:ChangeEvent<HTMLInputElement>) : void =>{
    if(event.target.name === "task")
      setTask(event.target.value);
    else
      setDeadLine(Number(event.target.value));
  }

  //function to addTask in the todolist
  const addTask=() :void =>{
    const newTask={ taskName:task, deadline:deadLine };
    setToDoList([...toDoList,newTask]);
    setTask("");
    setDeadLine(0);
  }

  //function to deleteTask from the todoList
  const deleteTask=(taskToDelete:string):void =>{
    setToDoList(toDoList.filter((task)=>{
      return task.taskName !== taskToDelete;
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputField">
        <input 
          type="text" 
          placeholder="What do you wish to do...." 
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input 
          type="number" 
          placeholder="Deadline (in Days)...."
          name="deadline"
          value={deadLine} 
          onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="todolist">
        {toDoList.map((toDoItem:Task,key:number)=>{
          return <ToDoTask key={key} task={toDoItem} deleteTask={deleteTask}/>
        })}
      </div>
     
    </div>
  );
}

export default App;
