import * as uniqid from 'uniqid';

import * as fromActionTypes from "../constants/actionTypes";

const managerDB = JSON.parse(localStorage.getItem('managerDB'));
const initialState = managerDB || {
    currentUser: null,
    users: [],
    tasks: []
};

export const authReducer = (state = initialState, action) => {
    let updatedCurrentState, updatedState;

    switch (action.type) {
        case fromActionTypes.REGISTER:
            const { value: user } = action;

            user.id = uniqid('user-');

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
            const tasks = state.tasks
                .filter(task => task.userId === action.value.id || task.sharedWith.includes(action.value.id))
                .map(task => {
                    if (task.sharedWith.includes(action.value.id)) {
                        const owner = state.users.find(user => user.id === task.userId);

                        task.ownerEmail = owner.email;
                    }

                    return task;
                });
            const currentUser = {
                ...action.value,
                tasks
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
        case fromActionTypes.SYNC_CURRENT_USER:
            const managerDB = JSON.parse(localStorage.getItem('managerDB'));
            const userToSync = managerDB.users.find(user => user.id === action.value);

            userToSync.tasks = managerDB.tasks.filter(task => task.userId === action.value || task.sharedWith.includes(action.value));

            updatedCurrentState = {
                ...state,
                currentUser: userToSync
            };

            localStorage.setItem('managerDB', JSON.stringify(updatedCurrentState));

            return updatedCurrentState;
        case fromActionTypes.ADD_TASK:
            const { payload: text } = action;
            const task = {
                text,
                id: uniqid('task-'),
                userId: state.currentUser.id,
                sharedWith: []
            };

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
        case fromActionTypes.SHARE_TASK:
            const shareWith = state.users.find(user => user.email === action.shareUserEmail);

            if (shareWith) {
                state.tasks.forEach(task => {
                    if (task.id === action.id) {
                        !task.sharedWith.includes(shareWith.id) && task.sharedWith.push(shareWith.id);
                    }
                });
            }


            updatedState = {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            };

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        default:
            return state;
    }
}