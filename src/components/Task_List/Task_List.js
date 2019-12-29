import React from 'react';
import TaskItem from '../Task_Item/Task_Item';

const TaskList = ({ currentUser, deleteTask, editTask, saveEditTask }) => {
    const handleDeleteTask = id => {
        deleteTask(id);
    }

    const handleEditTask = id => {
        editTask(id);
    }

    return (
        <div className="tasks-list">
            {currentUser.tasks.map((item, index) => (
                <TaskItem 
                    {...item} 
                    key={index} 
                    deleteTask={handleDeleteTask} 
                    editTaskBtn={handleEditTask} 
                    saveEditTask={saveEditTask} />
            ))}
        </div>
    )
}

export default TaskList;