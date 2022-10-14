import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar bg-dark text-light">
        <h1>Midterm Choloy</h1>

            <div className="links">
              <strong>
                <Link to="/">Home</Link>
                <Link to="/students">Students</Link>
                <Link to="/venues">Venues</Link>
                <Link className="btn btn-light" to="/login">Login</Link>
                <Link className="btn btn-light" to="/register">Register</Link>
              </strong>
            </div>
    
      </nav>
    );
}
 
export default Navbar;