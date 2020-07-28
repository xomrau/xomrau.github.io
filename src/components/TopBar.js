import React from 'react';
import './TopBar.css';

const NavBar = () => {
    return (<div className="nav-bar">
        <ul>
            <li className="nav-item"><a href="#work">Work</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
    </div>);
};

const TopBar = () => {
    return (<div className="top-bar">
        <div className="container">
            <p className="name">It's Danny L.</p>
            {/*<div className="logo"><img src="https://via.placeholder.com/50" alt="logo"></img></div>
            */}
            <NavBar />
        </div>
    </div>);
};

export default TopBar;