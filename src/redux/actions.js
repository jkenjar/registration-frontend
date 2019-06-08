import axios from "axios";

const baseURL = 'http://142.93.57.49:8080';

const getInstructors = () => {
  return {
    type: "GET_INSTRUCTORS",
    payload: axios.get(baseURL + "/instructors")
  };
};

const getDepartments = () =>{
  return {
    type: 'GET_DEPARTMENTS',
    payload: axios.get(baseURL + '/departments')
  }
}

const saveInstructor = (instructor) => {
  return {
    type: "SAVE_INSTRUCTOR",
    payload: axios.post(baseURL + "/add_instructor", {
      instructor_id: instructor.instructor_id,
      firstName: instructor.firstName || 'First',
      lastName: instructor.lastName || 'Last',
      dob: instructor.dob || '',
      email: instructor.email || '',
      phone: instructor.phone || '',
      positionType: instructor.positionType || '',
      dateHired: instructor.dateHired || '',
      description: instructor.description || ''
    })
  };
};

const editInstructor = (instructor) => {
  return {
    type: 'EDIT_INSTRUCTOR',
    payload: axios.post(baseURL + '/edit_instructor', {
      instructor_id: instructor.instructor_id,
      firstName: instructor.firstName || '',
      lastName: instructor.lastName || '',
      dob: instructor.dob || '',
      email: instructor.email || '',
      phone: instructor.phone || '',
      positionType: instructor.positionType || '',
      dateHired: instructor.dateHired || '',
      description: instructor.description || ''
    })
  };
};

const deleteInstructor = (instructId) => {
   return {
    type: 'DELETE_INSTRUCTOR',
    payload: axios.delete(baseURL + '/delete_instructor' + instructId)
  };
}

export const actions = {
  getInstructors,
  getDepartments,
  saveInstructor,
  editInstructor,
  deleteInstructor
};
