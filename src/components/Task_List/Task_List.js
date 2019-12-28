import React from 'react';
import TaskItem from '../Task_Item/Task_Item';

const TaskList = ({ items, deleteTask, editTask, saveEditTask }) => {
    const handleDeleteTask = id => {
        deleteTask(id);
    }

    const handleEditTask = id => {
        editTask(id);
    }

    return (
        <div className="tasks-list">
            {items.map((item, index) => (
                <TaskItem key={index} {...item} deleteTask={handleDeleteTask} editTaskBtn={handleEditTask} saveEditTask={saveEditTask} />
            ))}
        </div>
    )
}

export default TaskList;