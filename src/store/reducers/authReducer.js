import { REGISTER, LOGIN, ADD_TASK, DELETE_TASK, EDIT_TASK, SAVE_EDIT_TASK } from "../constants/actionTypes";

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
            state.tasks.filter((task, key) => task.id === action.id ? state.tasks.splice(key, 1) : null);

            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case EDIT_TASK:
            state.tasks.filter(task => task.id === action.id ? task.isEditing = true : task.isEditing = false);

            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case SAVE_EDIT_TASK:
            state.tasks.filter(task => {
                if (task.id === action.id && action.newTask) {
                    task.text = action.newTask;
                    task.isEditing = false;
                } else {
                    task.isEditing = false;
                }
            });

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