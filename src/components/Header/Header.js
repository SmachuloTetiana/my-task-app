import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    const handleLogOut = event => {
        event.preventDefault();
        props.setCurrentUser(null);
    }
    return (
        <header className="Header">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    {
                        props.currentUser ? (
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink 
                                        activeClassName="active" 
                                        className="nav-link" 
                                        exact
                                         to='/'>
                                            Home
                                        </NavLink>
                                </li>

                                <button
                                    type="button"
                                    className="btn btn-primary ml-auto"
                                    onClick={handleLogOut}>
                                    Log Out
                                </button>
                            </React.Fragment>
                            ) : (
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink 
                                        activeClassName="active" 
                                        className="nav-link" 
                                        to='/register'>
                                            Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        activeClassName="active" 
                                        className="nav-link" 
                                        to='/login'>
                                            Login
                                    </NavLink>
                                </li>
                            </React.Fragment>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;