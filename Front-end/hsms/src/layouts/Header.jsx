import "../assets/layout.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import React, { useState } from "react";
function Header() {
  const [auth, setAuth] = useState(sessionStorage.getItem("auth") || "0");
  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("userData");
    setAuth("0");
    // Add any additional logout logic here, such as clearing user data from sessionStorage
  };
  return (
    <div className="header">
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg headerbg">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold fs-4" to="/">
                {
                  <img
                    src={logo}
                    alt=""
                    width="35"
                    height="35"
                    class="d-inline-block align-text-top"
                  />
                }{" "}
                Housing-Society-Management-System
              </Link>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav"></ul>
              </div>
              <div className="logincde">
                <ul className="d-flex">
                  <li className="nav-item">
                    <Link to="/about" className="navlink btn btn-outline-info">
                      About
                    </Link>
                  </li>
                  <li>
                    {auth !== "0" ? (
                      <button
                        onClick={handleLogout}
                        className="navlink btn btn-outline-primary"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        to="./login"
                        className="navlink btn btn-outline-primary"
                      >
                        Login/SignUp
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {auth !== "0" && (
        <div className="side-panel">
          <ul>
            {auth === "admin" && (
              <li>
                <Link to="/add-building">Add Building</Link>
              </li>
            )}
            {auth === "secretary" && (
              <li>
                <Link to="/add-flat">Add Flat</Link>
              </li>
            )}
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
