import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Kenjar University
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Hire
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/enroll">
                  Enroll
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
