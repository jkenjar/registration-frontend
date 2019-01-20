import { actions } from "./actions";

const saveInstructor = (instructor) => {
    return (dispatch) => {
        dispatch(actions.saveInstructor(instructor)).then(
            dispatch(actions.getInstructors())
        );
    }
} 

export const operations = {
    saveInstructor
};