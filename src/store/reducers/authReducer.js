import { REGISTER, LOGIN, ADD_TASK, DELETE_TASK } from "../constants/actionTypes";

const managerDB = JSON.parse(localStorage.getItem('managerDB'));
const initialState = managerDB || {
    currentUser: null,
    users: [],
    tasks: []
};

export const authReducer = (state = initialState, action) => {
    let updatedCurrentState, updatedState;

    switch(action.type) {
        case REGISTER: 
            const { value: user } = action;

            user.id = state.users.length + 1;

            updatedState = {
                ...state,
                users: [
                    ...state.users,
                    user
                ]
            };

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case LOGIN:
            updatedCurrentState = {
                ...state,
                currentUser: action.value
            };
            
            localStorage.setItem('managerDB', JSON.stringify(updatedCurrentState));

            return updatedCurrentState;
        case ADD_TASK:
            const { payload: task } = action;

            task.id = state.tasks.length + 1;
            task.userId = state.currentUser.id;

            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks,
                    task
                ]
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case DELETE_TASK:
            state.tasks.splice(action.id, 1);

            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        default: 
            return state;
    }
}