import React from "react";
import "./MainLayout.css";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h2>Welcome to Home Page.</h2>
      <nav>
        <ul className="nav-css">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registeration">Registration</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
