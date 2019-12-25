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

    return (
        <div className="container">
            <div className="task-wrapper">
                <h2 className="task-title">To do</h2>

                <div className="list-tasks">
                    <span className="icon-edit"></span>
                    {
                        props.currentUser.tasks.map((task, key) => (
                            <div key={key}>{ task.name }</div>
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