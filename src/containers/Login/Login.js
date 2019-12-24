import React, { useState } from 'react';

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

        props.users.find(el => {
            if(email !== el.email || password !== el.password) {
                setError('Confirm your e-mail or password field!')
            } else {
                setError(null);
                setSuccess('You are loged in.');
                props.setCurrentUser(user);
                props.history.push('/');
            }
        })
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