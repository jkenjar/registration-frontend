import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

export default class InstructorList extends Component {
  render() {
    return (
      <div>
        <Paper style={{ width: "150px" }}>
          <strong style={{ marginLeft: "23%" }}>Instructors</strong>
          <hr style={{ padding: "0px", margin: "0px" }} />
          <List component="ol">
            {this.props.instructors.map((value, key) => (
              <ListItem
                key={key}
                button
                onClick={e => this.props.getTeacher(e, value)}
              >
                <ListItemText>
                  {value.first_name + " " + value.last_name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}
