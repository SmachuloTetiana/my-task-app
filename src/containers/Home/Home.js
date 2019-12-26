import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';

const Home = props => {
    const [task, setTask] = useState({
        name: ''
    });

    const addTaskHandler = event => {
        event.preventDefault();

        props.addTask(task);

        setTask({ name: '' });
    }

    if (!props.currentUser) {
        return <Redirect to='/login' />
    }

    const onDeleteTask = id => {
        props.deletedTask(id);

        setTask({ task })
    }

    function onEditTask(id) {
        props.editTask(id)

        setTask({ task })
    }

    const onSaveTask = id => {        
        props.saveEditTask(id, task);

        setTask({ task })
    }

    return (
        <div className="container">
            <div className="task-wrapper">
                <h2 className="task-title">To do</h2>

                <div className="list-tasks">
                    {
                        props.currentUser.tasks.map((task, key) => (
                            <div className="d-flex flex-column task" key={key}>    
                                { task.editItem ? (                             
                                    <form className="d-flex flex-row">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            defaultValue={task.name} 
                                            onChange={event => setTask({ name: event.target.value })} />
                                        <button 
                                            type="button"
                                            onClick={() => onSaveTask(key)} 
                                            className="btn btn-primary">
                                                Save
                                        </button>
                                    </form>
                                ) : (                                    
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        { task.name }      

                                        <button 
                                            type="button" 
                                            className="btn btn-secondary ml-auto"
                                            onClick={() => onEditTask(key)} 
                                            style={{marginRight: '15px'}}>
                                                Edit
                                        </button>
                                        
                                        <button 
                                            type="button" 
                                            className="btn btn-danger" 
                                            onClick={() => onDeleteTask(key)}>
                                                Delete
                                        </button>
                                    </div> 
                                )}       
                               
                            </div>
                        ))
                    }
                </div>

                <form>
                    <div className="form-group">
                        <textarea
                            required
                            placeholder="Add your task name..."
                            name="name"
                            value={task.name}
                            className="form-control"
                            onChange={event => setTask({ name: event.target.value })}>
                        </textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        onClick={addTaskHandler}
                        className="btn btn-primary">
                            Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home;