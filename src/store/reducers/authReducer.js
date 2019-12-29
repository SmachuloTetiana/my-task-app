import * as fromActionTypes from "../constants/actionTypes";

const managerDB = JSON.parse(localStorage.getItem('managerDB'));
const initialState = managerDB || {
    currentUser: null,
    users: [],
    tasks: []
};

export const authReducer = (state = initialState, action) => {
    let updatedCurrentState, updatedState;

    switch(action.type) {
        case fromActionTypes.REGISTER: 
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
        case fromActionTypes.LOGIN:
            const currentUser = {
                ...action.value,
                tasks: action.value && state.tasks.filter(task => task.userId === action.value.id)
            };

            updatedCurrentState = {
                ...state,
                currentUser
            };
            
            localStorage.setItem('managerDB', JSON.stringify(updatedCurrentState));

            return updatedCurrentState;
        case fromActionTypes.LOG_OUT:
            updatedCurrentState = {
                ...state,
                currentUser: null
            };
            
            localStorage.setItem('managerDB', JSON.stringify(updatedCurrentState));

            return updatedCurrentState;
        case fromActionTypes.ADD_TASK:
            const { payload: task } = action;

            task.id = state.tasks.length + 1;
            task.userId = state.currentUser.id;

            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks,
                    task
                ],
                currentUser: {
                    ...state.currentUser,
                    tasks: [
                        ...state.currentUser.tasks,
                        task
                    ]
                }
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case fromActionTypes.DELETE_TASK:
            state.tasks.filter((task, key) => task.id === action.id ? state.tasks.splice(key, 1) : null);

            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case fromActionTypes.SAVE_EDIT_TASK:
            state.tasks.forEach(task => {
                if (task.id === action.id && action.newTask) {
                    task.text = action.newTask;
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