/* eslint-disable */

import React, { useState } from "react";
import './ToDoList.css'

export const ToDoList = () => {

    interface Itask{
        task:string,
        status:boolean
    }

    const [tasks, setTasks  ] = useState<Itask[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    console.log(tasks);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setNewTask(e.target.value)


    }

    const addTask = ():void => {
        setTasks((prevTasks) => [...prevTasks, { task: newTask, status: false }]);
        setNewTask("")
    }

    const editTask = (taskId:number) => {
        setTasks(tasks.map((task:Itask,index:number) => index === taskId?{...task,status:!task.status}:task ))
    }
    
    const deleteTask = (taskId:number):void => {

        setTasks(tasks.filter((_task:Itask,index:number)=> index !== taskId))

    }


    return (
        <div className="to-do-list">

            <h1>To Do List!</h1>
            <div>
            <ol>
                {tasks.map((task, index) =>

                    <li key={index}>
                        <span className="text" style={{textDecoration: task.status ? 'line-through' : 'none'}}>{task.task}</span>
                        <button className={"changeButton"} onClick={() => editTask(index)}>✏️</button>
                        <button className={"deleteButton"} onClick={() => deleteTask(index)}>🗑️</button>
                    </li> )}
            </ol>
            </div>
            <input type="text" placeholder="Enter Task..." value={newTask} onChange={handleInputChange}></input>
            <button className="add-button" onClick={addTask}>Add Task</button>
        </div>


    )
}