import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';

const Login = props => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChangeInput = event => {
        event.preventDefault();
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        
        const { email, password } = user;

        props.users.forEach(obj => {
            if(email !== obj.email || password !== obj.password) {
                setError('Your credentials are invalid!')
            } else {
                setError(null);
                setSuccess('You are logged in.');

                props.setCurrentUser(obj);
                props.history.push('/');
            }
        })
    }

    if (props.currentUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="container">
            { 
                error ? 
                <React.Fragment>
                    <div className="alert alert-danger">
                        {error}
                    </div>
                </React.Fragment> : 
                null 
            }


            { 
                success ? 
                <React.Fragment>
                    <div className="alert alert-success">
                        {success}
                    </div>
                </React.Fragment> : 
                null 
            }
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input 
                        type="email"
                        name="email"
                        value={user.email}
                        required
                        onChange={handleChangeInput}
                        className="form-control"
                        placeholder="E-mail" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={user.password}
                        required
                        onChange={handleChangeInput}
                        className="form-control"
                        placeholder="Password" />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">
                        Login
                </button>
            </form>
        </div>
    )
}

export default Login;