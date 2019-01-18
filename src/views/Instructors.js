import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DepartmentList from "./DepartmentList";

export default class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      departments: [],
      teacherId: -1,
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      positionType: '',
      dateHired: '',
      department: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      console.log(nextProps.instructors);
      this.setState({
        instructors: nextProps.instructors[0] || [],
        departments: nextProps.departments[0] || []
      });
    }
  }

  componentDidMount() {
    this.setState({
      instructors: this.props.instructors[0] || [],
      departments: this.props.departments[0] || []
    });
  }

  change = (e) => {
    if(e.target.id === 'first_name') {
      this.setState({
        firstName: e.target.value
      });
    } else if(e.target.id === 'last_name') {
      this.setState({
        lastName: e.target.value
      });
    } else if(e.target.id === 'dob') {
      this.setState({
        dob: e.target.value
      });
    } else if(e.target.id === 'email') {
      this.setState({
        email: e.target.value
      });
    } else if(e.target.id === 'phone') {
      this.setState({
        phone: e.target.value
      });
    } else if(e.target.id === 'position_type') {
      this.setState({
        positionType: e.target.value
      });
    } else if(e.target.id === 'date_hired') {
      this.setState({
        dateHired: e.target.value
      });
    } else if(e.target.id === 'department') {
      this.setState({
        department: e.target.value
      });
    }
  }

  getTeacher = (e, value) => {
    console.log(value.first_name)
    this.setState({
      firstName: value.first_name,
      lastName: value.last_name,
      dob: value.dob,
      email: value.email,
      phone: value.phone,
      positionType: value.position_type,
      dateHired: value.date_hired,
      department: value.department_id
    });
  }

  render() {
    const styles = {
      tabContent: {
        position: "relative",
        top: "100px",
        left: "50px"
      },
    };
    return (
      <div style={styles.tabContent} className="container">
      <div className="row">
        <div className="col-sm-3">
          <Paper style={{ width: "200px" }}>
          <strong style={{marginLeft: '16%'}}>Instructors</strong>
          <List component="ol">
            {this.state.instructors.map((value, key) => (
              <ListItem key={key} button onClick={(e) => this.getTeacher(e, value)}>
                <ListItemText>
                  {value.first_name + " " + value.last_name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
        </div>
        <div
          className="col-sm-5"
        >
          <Paper style={{width: '420px', paddingBottom: '20px'}}>
            <TextField
              id="first_name"
              label="First Name"
              value={this.state.firstName}
              onChange={this.change}
              style={{margin: '12px', display: 'inline'}}
            />
            <TextField
              id="last_name"
              label="Last Name"
              value={this.state.lastName}
              onChange={this.change}
              style={{margin: '12px', display: 'inline'}}
            />
            <br />
            <TextField
              id="dob"
              label="Date of Birth"
              value={this.state.dob}
              onChange={this.change}
              style={{margin: '12px', display: 'inline'}}
            />
            <TextField
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.change}
              style={{margin: '12px', display: 'inline'}}
            />
            <br />
            <TextField
              id="phone"
              label="Phone Number"
              value={this.state.phone}
              onChange={this.change}
              style={{margin: '12px', display: 'inline'}}
            />
            <TextField
              id="position_type"
              label="Position Type"
              value={this.state.positionType}
              onChange={this.change}
              style={{margin: '12px', display: 'inline'}}
            />
            <br />
            <TextField
              id="date_hired"
              label="Date Hired"
              value={this.state.dateHired}
              onChange={this.change}
              style={{
                margin: '12px',
                display: 'inline',
                }}
            />
            <TextField
              id="department"
              label="Department"
              value={this.state.department}
              onChange={this.change}
              style={{
                margin: '12px',
                display: 'inline',
                }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: '#3498DB',
                color: 'white',
                margin: '10px'
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'RED',
                color: 'white',
                margin: '10px'
              }}
            >
              Delete
            </Button>
          </Paper>
        </div>
        <div className="col-sm-4">
          <DepartmentList departments={this.state.departments} />
        </div>
      </div>
      </div>
    );
  }
}
