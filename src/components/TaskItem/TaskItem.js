import React, { useState } from 'react';

const TaskItem = props => {
    var newTaskText, shareUserEmail;

    const [ isEditing, setIsEditing ] = useState(false);

    const [ isSharing, setIsSharing ] = useState(false);

    const handleSaveEditTask = (id, newTask) => {
        props.saveEditTask(id, newTask);
        setIsEditing(!isEditing);
    }

    const editTaskHandler = () => setIsEditing(!isEditing);

    const shareTaskHandler = () => setIsSharing(!isSharing);

    const shareUserHandler = (id, shareUserEmail) => {
        props.shareTask(id, shareUserEmail);
        setIsSharing(!isSharing);
    }

    return (
        <React.Fragment>
        <div className="task d-flex flex-row justify-content-between">
            {
                isEditing ? (
                    <React.Fragment>
                        <form className="d-flex flex-row justify-content-between" style={{'flex': 'auto'}}>
                            <input className="form-control" type="text" defaultValue={props.text} onChange={event => newTaskText = event.target.value} />

                            <button type="button" className="btn btn-primary" onClick={() => handleSaveEditTask(props.id, newTaskText)}>
                                Save
                            </button>
                        </form>        
                    </React.Fragment>                    
                ) : (        
                    <React.Fragment>
                        {props.text}

                        {
                            props.sharedWith.includes(props.currentUserId) ? (
                                <span className="shared-with"><strong>Shared with me:</strong> {props.ownerEmail}</span>
                            ) : (
                                <React.Fragment>
                                         <button type="button" className="btn btn-primary ml-auto" onClick={() => shareTaskHandler(props.id)}>
                                             Share the Task
                                         </button>
                
                                         <button type="button" className="btn btn-dark" onClick={() => editTaskHandler(props.id)}>
                                             Edit
                                         </button>
                
                                         <button type="button" className="btn btn-danger" onClick={() => props.deleteTask(props.id)}>
                                             Delete
                                         </button>
                                     </React.Fragment>
                            )
                        }
                    </React.Fragment>
                )
            }
        </div>

        {isSharing ? (
            <form className="d-flex shared-form">
                <input 
                    className="form-control" 
                    type="email" 
                    name="email"
                    value={shareUserEmail}
                    onChange={event => shareUserEmail = event.target.value}/>
                <button type="button" className="btn btn-primary"  onClick={() => shareUserHandler(props.id, shareUserEmail)}>
                    Share
                </button>
            </form>
        ) : null}
        </React.Fragment>
    )
}

export default TaskItem;