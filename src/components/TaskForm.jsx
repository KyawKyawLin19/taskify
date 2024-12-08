import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'
import { use } from 'react'

    const TaskForm = ({setTasks}) => {
        const [taskData, setTaskData] = useState({
            task: "",
            status: "todo",
            tags: []
        });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        console.log(taskData.tags);
        if(taskData.tags.some(item => item === tag)){
            const filterTags = taskData.tags.filter( item => item !== tag);
            setTaskData( prev => {
                return {
                    ...prev,
                    tags: filterTags
                }
            })
        } else {
            setTaskData( prev => {
                return {
                    ...prev,
                    tags: [ ...prev.tags, tag]
                } 
            });
        }
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setTaskData({
            ...taskData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        });
    }

  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" className="task_input" value={taskData.task} placeholder="Enter your task"
            onChange={handleChange} />
            <div className="task_form_bottom_line">
                <div>
                    <Tag tagName= "Work" selectTag= {selectTag} selected={checkTag("Work")}/>
                    <Tag tagName= "Personal" selectTag= {selectTag} selected={checkTag("Personal")}/>
                    <Tag tagName= "Study" selectTag= {selectTag} selected={checkTag("Study")}/>
                    <Tag tagName= "Health" selectTag= {selectTag} selected={checkTag("Health")}/>
                </div>

                <div>
                    <select className="task_status" onChange={handleChange} name="status" value={taskData.status}>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button type="submit" className="task_submit">+ Add Task</button>
            </div>
        </form>
    </header>
  )
}

export default TaskForm