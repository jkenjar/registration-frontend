import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div style={{display: 'inline-flex', marginRight: '40px'}}>
                <div className="panel home-panel-1">
                    <ul className="list-group">
                        <li class="list-group-item"><a href="/hire">Hire</a></li>
                        <li class="list-group-item"><a href="/enroll">Enroll</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}