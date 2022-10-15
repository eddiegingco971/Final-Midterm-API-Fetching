import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      // <nav classNameName="navbar bg-dark text-light">
      //   <h1>Midterm Final Project Reactjsx</h1>

      //       <div classNameName="links">
      //         <strong>
      //           <Link to="/">Home</Link>
      //           <Link to="/students">Students</Link>
      //           <Link to="/venues">Venues</Link>
      //           <Link classNameName="btn btn-light" to="/login">Login</Link>
      //           <Link classNameName="btn btn-light" to="/register">Register</Link>
      //         </strong>
      //       </div>
    
      // </nav>

      <nav className="navbar navbar-expand-lg elavation-4 bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{
            fontSize:"30px",
            fontWeight:"bold",
            color:"white",
          }}>Midterm Final Project</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/">Home</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/students">Students</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/venues">Venues</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link btn btn-light" to="/login">Login</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link btn btn-light" to="/register">Register</Link></strong>
              </li>
              
          </ul>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;