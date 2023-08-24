import React from 'react'
import { Task } from '../Interface'

interface Props{
    task:Task;
    deleteTask(taskToDelete:string):void;
}

const ToDoTask=({task,deleteTask}:Props)=> {
  return (
    <div className='task'>
        <div className='content'>
        <span>Task: {task.taskName}</span>
        <span>DeadLine: {task.deadline}</span>
        </div>
        <button onClick={()=>{deleteTask(task.taskName)}}>
            Task Completed 
        </button>

    </div>
  )
}

export default ToDoTask