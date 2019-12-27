import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';

const Register = props => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChangeInput = event => {
        event.preventDefault();
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleRegister = event => {
        event.preventDefault();

        setUser({
            email: user.email,
            password: user.password
        })

        props.setRegisterUser(user);
    }

    if (props.currentUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input 
                        type="email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleChangeInput}
                        className="form-control"
                        placeholder="E-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleChangeInput}
                        className="form-control"
                        placeholder="Password" />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">
                        Register
                </button>
            </form>
        </div>
    )
}

export default Register;