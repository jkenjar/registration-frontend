import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div style={{ display: "inline-flex", marginRight: "40px" }}>
        <div className="panel home-panel-1">
          <ul className="list-group">
            <li class="list-group-item">
              <NavLink className="nav-link" to="/">
                Hire
              </NavLink>
            </li>
            <li class="list-group-item">
              <NavLink className="nav-link" to="/enroll">
                Enroll
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
