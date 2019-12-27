import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import TasksList from '../../components/TasksList';

const Home = props => {
    const [task, setTask] = useState();

    const handleAddTask = event => {
        event.preventDefault();

        props.addTask(task);

        setTask('');
    }

    if (!props.currentUser) {
        return <Redirect to='/login' />
    }

    return (
        <div className="container">
            <div className="task-wrapper">
                <h2 className="task-title">To do</h2>

                <TasksList {...props}/>

                <form onSubmit={handleAddTask}>
                    <div className="form-group">
                        <textarea
                            required
                            placeholder="Add your task name..."
                            name="name"
                            value={task}
                            className="form-control"
                            onChange={event => setTask(event.target.value)}>
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