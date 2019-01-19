import axios from "axios";
const getInstructors = () => {
  return {
    type: "GET_INSTRUCTORS",
    payload: axios.get("http://localhost:3000/instructors")
  };
};

const getDepartments = () =>{
  return {
    type: 'GET_DEPARTMENTS',
    payload: axios.get('http://localhost:3000/departments')
  }
}

const saveInstructor = (instructor) => {
  return {
    type: "SAVE_INSTRUCTOR",
    payload: axios.post("http://localhost:3000/add_instructor", {
      instructor_id: instructor.instructor_id,
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      dob: instructor.dob,
      email: instructor.email,
      phone: instructor.phone,
      positionType: instructor.positionType,
      dateHired: instructor.dateHired,
      description: instructor.description
    })
  };
};

export const actions = {
  getInstructors,
  getDepartments,
  saveInstructor
};
