import { combineReducers } from "redux";

const instructors = (state = [], action) => {
  switch(action.type) {
    case 'GET_INSTRUCTORS':
      return action.payload.data;
    case 'SAVE_INSTRUCTOR':
        return action.payload.data;
    case 'EDIT_INSTRUCTOR':
        return action.payload.data;
    default:
      return state;
  }
};

const departments = (state = [], action) => {
  switch(action.type) {
    case 'GET_DEPARTMENTS':
      return [...state, action.payload.data];
    default:
      return state;
  }
};

export const reducers = combineReducers({
  instructors,
  departments
});
