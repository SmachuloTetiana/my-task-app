import { REGISTER, LOGIN, ADD_TASK, DELETE_TASK } from "../constants/actionTypes";

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
        text
    }
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    id
})