import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header className="Header">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" exact to='/'>Home</NavLink>
                    </li>
                    {
                        !props.setCurrentUser ? (
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to='/register'>Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to='/login'>Login</NavLink>
                                </li>
                            </React.Fragment>
                        ) : null
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;