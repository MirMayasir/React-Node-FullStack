import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '/src/Components/Header/header.css'

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <nav>
        <div className="nav-toggle" onClick={toggleNav}>&#9776;</div>
        <ul className={`navbar ${showNav ? 'active' : ''}`}>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
