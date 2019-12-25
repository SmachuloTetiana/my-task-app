import { REGISTER, LOGIN, ADD_TASK } from "../constants/actionTypes";

const managerDB = JSON.parse(localStorage.getItem('managerDB'));
const initialState = managerDB || {
    currentUser: null,
    users: []
};

export const authReducer = (state = initialState, action) => {
    let updatedCurrentState;

    switch(action.type) {
        case REGISTER: 
            const { value: user } = action;

            user.id = state.users.length + 1;
            user.tasks = [];

            const updatedState = {
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
            state.currentUser.tasks = [...state.currentUser.tasks, action.value];
            state.users.forEach(user => {
                if (user.id === state.currentUser.id) {
                    user.tasks = state.currentUser.tasks;
                }
            });

            localStorage.setItem('managerDB', JSON.stringify(state));

            return state;
        default: 
            return state;
    }
}