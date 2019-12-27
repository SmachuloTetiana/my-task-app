import React from 'react';
import TaskItem from './TaskItem';

const TasksList = ({ items, deleteTask }) => {
    const handleDeleteTask = id => {
        deleteTask(id)
    }

    return (
        <div className="tasks-list">
            {items.map((item, key) => (
                <TaskItem key={key} {...item} deleteTask={handleDeleteTask} />
            ))}
        </div>
    )
}

export default TasksList;