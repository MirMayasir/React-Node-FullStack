import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import '/src/Components/Navbar/navbar.css';

const navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButtonHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <div id="nav-bar">
            <div className="name">
                <h2>MIR MAYASIR</h2>
            </div>
            <a href="#" className="navigation" onClick={toggleButtonHandler}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`nav-bar-links ${isActive ? 'active' : ''}`}>
                <h3><Link to="/">Home</Link></h3>
                <span className="span-line">|</span>
                <h3><Link to="/Experience">Experience</Link></h3>
                <span className="span-line">|</span>
                <h3><Link to="/Education">Education</Link></h3>
                <span className="span-line">|</span>
                <h3><Link to="/Projects">Projects</Link></h3>
                <span className="span-line">|</span>
                <h3><Link to="/ContactUs">Contact</Link></h3>
            </div>

        </div>
    );
};

export default navbar;


