import axios from "axios";
const getInstructors = () => {
  return {
    type: "GET_INSTRUCTORS",
    payload: axios.get("http://localhost:3000/instructors")
  };
};

// const saveInstructor = instructor => {
//   return {
//     type: "SAVE_INSTRUCTOR",
//     payload: axios.post("http://localhost:3000/add_instructor", {
//       instructorId: instructor.instructorId,
//       firstName: instructor.firstName,
//       lastName: instructor.lastName,
//       dob: instructor.dob,
//       email: instructor.email,
//       phone: instructor.phone,
//       positionType: instructor.positionType,
//       dateHired: instructor.dateHired,
//       department: instructor.department
//     })
//   };
// };

export const actions = {
  getInstructors
};
