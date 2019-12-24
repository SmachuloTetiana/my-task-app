import React, { useState } from 'react';

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

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input 
                        type="email"
                        name="email"
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
                        value={user.password}
                        onChange={handleChangeInput}
                        className="form-control"
                        placeholder="Password" />
                </div>
                <button
                    type="submit"
                    onClick={handleRegister}
                    className="btn btn-primary">
                        Register
                </button>
            </form>
        </div>
    )
}

export default Register;