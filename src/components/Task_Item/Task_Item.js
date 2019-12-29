import React, { useState } from 'react';

const TaskItem = ({ text, id, editTaskBtn, deleteTask, saveEditTask }) => {
    var newTaskText;

    const [ isEditing, setIsEditing ] = useState(false);

    const handleSaveEditTask = (id, newTask) => {
        saveEditTask(id, newTask);
        setIsEditing(!isEditing);
    }

    const editTaskHandler = () => setIsEditing(!isEditing);

    return (
        <div className="task d-flex flex-row justify-content-between">
            {
                isEditing ? (
                    <React.Fragment>
                        <form className="d-flex flex-row justify-content-between" style={{'flex': 'auto'}}>
                            <input className="form-control" type="text" defaultValue={text} onChange={event => newTaskText = event.target.value} />

                            <button type="button" className="btn btn-primary" onClick={() => handleSaveEditTask(id, newTaskText)}>
                                Save
                            </button>
                        </form>        
                    </React.Fragment>                    
                ) : (
                    <React.Fragment>
                        {text}
            
                        <button type="button" className="btn btn-dark ml-auto" onClick={() => editTaskHandler(id)}>
                            Edit
                        </button>

                        <button type="button" className="btn btn-danger" onClick={() => deleteTask(id)}>
                            Delete
                        </button>
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default TaskItem;