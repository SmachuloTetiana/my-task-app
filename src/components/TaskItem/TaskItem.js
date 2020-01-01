import React, { useState } from 'react';

const TaskItem = ({ text, id, ownerEmail, deleteTask, saveEditTask, shareTask }) => {
    var newTaskText, shareUserEmail;

    const [ isEditing, setIsEditing ] = useState(false);

    const [ isSharing, setIsSharing ] = useState(false);

    const handleSaveEditTask = (id, newTask) => {
        saveEditTask(id, newTask);
        setIsEditing(!isEditing);
    }

    const editTaskHandler = () => setIsEditing(!isEditing);

    const shareTaskHandler = () => setIsSharing(!isSharing);

    const shareUserHandler = (id, shareUserEmail) => {
        shareTask(id, shareUserEmail);
        setIsSharing(!isSharing);
    }

    return (
        <React.Fragment>
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
                        {ownerEmail}
            
                        <button type="button" className="btn btn-primary ml-auto" onClick={() => shareTaskHandler(id)}>
                            Share the Task
                        </button>

                        <button type="button" className="btn btn-dark" onClick={() => editTaskHandler(id)}>
                            Edit
                        </button>

                        <button type="button" className="btn btn-danger" onClick={() => deleteTask(id)}>
                            Delete
                        </button>
                    </React.Fragment>
                )
            }
        </div>

        {isSharing ? (
            <form className="d-flex">
                <input 
                    className="form-control" 
                    type="email" 
                    name="email"
                    value={shareUserEmail}
                    onChange={event => shareUserEmail = event.target.value}/>
                <button type="button" className="btn btn-primary"  onClick={() => shareUserHandler(id, shareUserEmail)}>
                    Share
                </button>
            </form>
        ) : null}
        </React.Fragment>
    )
}

export default TaskItem;