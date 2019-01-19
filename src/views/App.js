import React, { Component } from "react";
import { actions } from "../redux/actions";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from '@material-ui/core/AppBar';
import Instructors from './Instructors.js';

const mapDispatchToProps = dispatch => {
  return {
    getInstructors: () => {
      dispatch(actions.getInstructors());
    },
    getDepartments: () => {
      dispatch(actions.getDepartments());
    },
    saveInstructor: (data) => {
      dispatch(actions.saveInstructor(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    instructors: state.instructors,
    departments: state.departments
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'instructors',
    };
  }

  componentDidMount() {
    this.props.getInstructors();
    this.props.getDepartments();
  }

  change = (event, value) => {
    this.setState({
      value: value
    });
  }

  render() {
    const styles = {
      tabContent: {
        position: 'relative',
        top: '100px',
        left: '50px'
      },
      pageContent: {
        fontFamily: 'Roboto'
      },
      header: {
        fontFamily: 'Roboto cursive'
      }
    }
    return (
      <div style={styles.pageContent}>
        <AppBar style={{color: 'white', backgroundColor: '#2196f3'}} position="fixed">
          <Tabs value={this.state.value} onChange={this.change}>
            <Tab
              style={{color: 'white', backgroundColor: '#2196f3', display: 'inline'}}
              value="instructors"
              label="Professors"
            />
            <Tab
              style={{color: 'white', backgroundColor: '#2196f3'}}
              value="students"
              label="Students"
            />
        </Tabs>
        </AppBar>
        <div>
          {
            this.state.value === 'instructors' &&
            <Instructors 
              instructors={this.props.instructors} 
              departments={this.props.departments} 
              saveInstructor={this.props.saveInstructor}
            />
          }
          {
            this.state.value === 'students' &&
            <div style={styles.tabContent}>
            <h1>Student page will go here...</h1>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
