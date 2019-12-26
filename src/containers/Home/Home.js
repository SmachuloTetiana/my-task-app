import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';

const Home = props => {
    const tasks = props.currentUser.tasks;
    const [task, setTask] = useState({
        name: ''
    });

    const addTaskHandler = event => {
        event.preventDefault();

        props.addTask(task);

        setTask({ name: '' });
    }

    const onDeleteTaskHandler = id => {
        props.deletedTask(id);

        setTask({ name: '' });
    }

    const onEditTask = id => {
        props.editTask(id);

        setTask({ name: '' });
    }

    const onSaveTask = (id, task) => {        
        props.saveEditTask(id, task);

        setTask({ name: '' });
    }

    const onTaskNameChangeHandler = (editedTask, name) => {
        editedTask.name = name;

        setTask({ name: '' });
    }

    if (!props.currentUser) {
        return <Redirect to='/login' />
    }

    return (
        <div className="container">
            <div className="task-wrapper">
                <h2 className="task-title">To do</h2>

                <div className="list-tasks">
                    {
                        tasks.map((item, key) => (
                            <div className="d-flex flex-column task" key={key}>    
                                { item.editItem ? (                             
                                    <form className="d-flex flex-row">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={item.name} 
                                            onChange={event => onTaskNameChangeHandler(item, event.target.value)} />
                                        <button 
                                            type="button"
                                            onClick={() => onSaveTask(key, item)} 
                                            className="btn btn-primary">
                                                Save
                                        </button>
                                    </form>
                                ) : (                                    
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        { item.name }      

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
                                            onClick={() => onDeleteTaskHandler(key)}>
                                                Delete
                                        </button>
                                    </div> 
                                )}       
                               
                            </div>
                        ))
                    }
                </div>

                <form onSubmit={addTaskHandler}>
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
                    
                    <button type="submit" className="btn btn-primary">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home;