import React from 'react';

const TaskItem = ({ text, id,  deleteTask }) => {
    return (
        <div className="task d-flex flex-row justify-content-between">
            {text}

            <button type="button" className="btn btn-dark ml-auto">
                Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={() => deleteTask(id)}>
                Delete
            </button>
        </div>
    )
}

export default TaskItem;