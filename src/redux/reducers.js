import { combineReducers } from "redux";

const instructors = (state = [], action) => {
  switch(action.type) {
    case 'GET_INSTRUCTORS':
      return [...state, action.payload.data];
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
