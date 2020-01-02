import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ currentUser, deleteTask, saveEditTask, syncCurrentUser, shareTask }) => {
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
                    currentUserId={currentUser.id}
                    deleteTask={deleteTaskHandler}
                    saveEditTask={saveEditTaskHandler}
                    shareTask={shareTask} />
            ))}
        </div>
    )
}

export default TaskList;