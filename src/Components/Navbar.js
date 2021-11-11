import React from "react";
import { Link } from "react-router-dom";
import './index';

const Navbar = () => {
  return (
      <div className="App-container">
            <nav className="navbar">
                <div className="navbar links">
                    <Link to="/users">User Lists</Link>
                    <Link to="/users/{id}">Detail User</Link>
                </div>
            </nav>
      </div>
    
  );
};

export default Navbar;
