import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/hire">Kenjar University</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/hire">Hire<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/enroll">Enroll</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}