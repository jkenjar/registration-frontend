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
      teacherId: 0,
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
      console.log(nextProps.instructors)
      this.setState({
        instructors: nextProps.instructors
      });
    this.setState({
      departments: nextProps.departments[0] || []
    });
  }

  componentDidMount() {
    this.setState({
      instructors: this.props.instructors,
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

  getTeacher = (e, teach) => {
    let dept = this.state.departments.filter(value => {
      if(value.department_id == teach.department_id) {
        return value;
      }
    })
    this.setState({
      teacherId: teach.instructor_id,
      firstName: teach.first_name,
      lastName: teach.last_name,
      dob: teach.dob,
      email: teach.email,
      phone: teach.phone,
      positionType: teach.position_type,
      dateHired: teach.date_hired,
      department: (dept !== undefined && dept.length > 0) ? dept[0].description : ''
    });
  }

  getDepartment = (e, value) => {
    this.setState({
      department: value.description
    });
  }

  saveOrEditInstructor = (e) => {
    console.log(typeof this.state.teacherId)
    let instructor = {
      instructor_id: this.state.teacherId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      email: this.state.email,
      phone: this.state.phone,
      positionType: this.state.positionType,
      dateHired: this.state.dateHired,
      description: this.state.department
    }

    if(this.state.teacherId === 0) 
    {
      console.log('save')
      this.props.saveInstructor(instructor);
      this.setState({
        teacherId: 0,
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        positionType: '',
        dateHired: '',
        department: '',
      });
    } 
    else 
    {
      console.log('edit')
      this.props.editInstructor(instructor);
    }
  }

  clear = () => {
    this.setState({
      teacherId: 0,
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      positionType: '',
      dateHired: '',
      department: '',
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
          <hr style={{padding: '0px', margin: '0px'}} />
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
              // disabled={(this.state.teacherId !== 0)}
              style={{
                backgroundColor: '#3498DB',
                color: 'white',
                margin: '10px 10px 10px 12px' 
              }}
              onClick={this.saveOrEditInstructor}
            >
              {(this.state.teacherId === 0) ? 'Save' : 'Edit'}
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#6c757d',
                color: 'white',
                margin: '10px'
              }}
              onClick={this.clear}
            >
              Clear
            </Button> 
            <Button
              variant="contained"
              style={{
                backgroundColor: 'red',
                color: 'white',
                margin: '10px 10px 10px 140px' 
              }}
            >
              Delete
            </Button> 
          </Paper>
        </div>
        <div className="col-sm-4">
          <DepartmentList 
            departments={this.state.departments}
            getDepartment={this.getDepartment}
          />
        </div>
      </div>
      </div>
    );
  }
}
