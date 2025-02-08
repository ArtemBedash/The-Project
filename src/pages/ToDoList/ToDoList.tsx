/* eslint-disable */

import { useState } from "react";
import './ToDoList.css'

export const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    console.log(tasks);


    const handleInputChange = (e) => {
        setNewTask(e.target.value)


    }

    const addTask = () => {
        setTasks(prevTasks => [...prevTasks, { task: newTask, status: false }]);
        setNewTask("")
    }

    const editTask = (taskId) => {
        setTasks(tasks.map((task,index) => index === taskId?{...task,status:!task.status}:task ))
    }
    
    const deleteTask = (taskId) => {

        setTasks(tasks.filter((task, index) => index !== taskId))

    }


    return (
        <div className="to-do-list">

            <h1>To Do List!</h1>
            <ol>
                {tasks.map((task, index) =>

                    <li key={index}>
                        <span className="text" style={{textDecoration: task.status ? 'line-through' : 'none'}}>{task.task}</span>
                        <button onClick={() => editTask(index)}>✏️</button>
                        <button onClick={() => deleteTask(index)}>🗑️</button>
                    </li>)}
            </ol>
            <input type="text" placeholder="Enter Task..." value={newTask} onChange={handleInputChange}></input>
            <button className="add-button" onClick={addTask}>Add Task</button>
        </div>


    )
}