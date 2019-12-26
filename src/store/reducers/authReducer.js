import { REGISTER, LOGIN, ADD_TASK, DELETE_TASK, EDIT_TASK, SAVE_EDIT_TASK } from "../constants/actionTypes";

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
        case DELETE_TASK:
            state.currentUser.tasks.splice(action.value, 1);

            state.users.forEach(user => {
                if(user.id === state.currentUser.id) {
                    user.tasks = state.currentUser.tasks
                }
            })
            
            localStorage.setItem('managerDB', JSON.stringify(state));

            return state;
        case EDIT_TASK:
            state.currentUser.tasks.forEach((task, key) => {
                if(key === action.itemId) {
                    state.currentUser.tasks[key].editItem = true;
                } else {
                    state.currentUser.tasks[key].editItem = false;
                }
            });

            return state;
        case SAVE_EDIT_TASK:
            state.currentUser.tasks[action.itemId] = action.value;

            // finish user

            localStorage.setItem('managerDB', JSON.stringify(state));

            return state;
        default: 
            return state;
    }
}