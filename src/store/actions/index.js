import { REGISTER, LOGIN, ADD_TASK, DELETE_TASK, EDIT_TASK, SAVE_EDIT_TASK } from "../constants/actionTypes";

export const setRegisterUser = person => ({
    type: REGISTER,
    value: person
})

export const setCurrentUser = person => ({
    type: LOGIN,
    value: person
})

export const addTask = text => ({
    type: ADD_TASK,
    payload: {
        isEditing: false,
        text
    }
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    id
})

export const editTask = id => ({
    type: EDIT_TASK,
    id
})

export const saveEditTask = (id, newTask) => ({
    type: SAVE_EDIT_TASK,
    id,
    newTask
})