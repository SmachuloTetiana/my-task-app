import React from 'react';
import TaskItem from '../Task_Item/Task_Item';

const TaskList = ({ currentUser, deleteTask, saveEditTask, syncCurrentUser }) => {
    const deleteTaskHandler = id => {
        deleteTask(id);
        syncCurrentUser(currentUser.id);
    }

    const saveEditTaskHandler = (id, newTask) => {
        saveEditTask(id, newTask);
        syncCurrentUser(currentUser.id);
    };

    return (
        <div className="tasks-list">
            {currentUser.tasks.map((item, index) => (
                <TaskItem 
                    {...item} 
                    key={index} 
                    deleteTask={deleteTaskHandler}
                    saveEditTask={saveEditTaskHandler} />
            ))}
        </div>
    )
}

export default TaskList;