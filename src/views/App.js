import React, { Component } from "react";
import { actions } from "../redux/actions";
import { connect } from "react-redux";
import Instructors from './Instructors.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
const mapDispatchToProps = dispatch => {
  return {
    getInstructors: () => {
      dispatch(actions.getInstructors());
    },
    getDepartments: () => {
      dispatch(actions.getDepartments());
    },
    saveInstructor: (instructor) => {
      dispatch(actions.saveInstructor(instructor))
    },
    editInstructor: (instructor) => {
      dispatch(actions.editInstructor(instructor))
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

    const HirePage = () => {
      return (
        <Instructors 
          instructors={this.props.instructors} 
          departments={this.props.departments} 
          saveInstructor={this.props.saveInstructor}
          editInstructor={this.props.editInstructor}
        />
      );
    }

    const TestPage = () => {
      return (
        <h1 style={{display: 'inline-flex'}}>Enroll Page will go here...</h1>
      );
    }

    return (
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/hire" component={HirePage} exact></Route>
          <Route path="/enroll" component={TestPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
