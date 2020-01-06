import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' , border: 'solid' }
    } else {
        return { color: '#fff' }
    }
}

const Navbar = ({ history }) => {

    return (
        <nav>
            <ul className=" nav  bg-dark p-1">
                <li className="nav-item  ml-5">
                    <Link to="/" className="nav-link" style={isActive(history, '/')}>
                        Home
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/about" className="nav-link" style={isActive(history, '/about')}>
                        About
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/projects" className="nav-link" style={isActive(history, '/projects')}>
                        Projects
                    </Link>
                </li>

                <li className="nav-item ml-5">
                    <Link to="/signup" className="nav-link" style={isActive(history, '/signup')}>
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item ml-1 ">
                    <Link to="/signin" className="nav-link" style={isActive(history, '/signin')}>
                        Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(Navbar);
