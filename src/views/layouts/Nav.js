import React from 'react';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-light bg-light rounded-1 mb-4">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="" title="Todos App">Todos App</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-0">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link text-primary active" : "nav-link"} to="" title="Home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link text-primary active" : "nav-link"} to="todos" title="Todos">Todos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link text-primary active" : "nav-link"} to="about" title="About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link text-primary active" : "nav-link"} to="users" title="Users">Users</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Nav;