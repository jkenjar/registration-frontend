import React, { Component } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

export default class DepartmentList extends Component {

    render() {
        return (<div>
            <Paper>
                <strong style={{marginLeft: '4.5%'}}>Departments</strong>
                <List component="ol">
                    {
                        this.props.departments.map((value, key) => 
                            <ListItem key={key} button onClick={(e) => this.props.getDepartment(e, value)}>
                                { value.description }
                            </ListItem>
                            )
                    }
                </List>
            </Paper>
        </div>);
    }
}