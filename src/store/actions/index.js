import { REGISTER, LOGIN, ADD_TASK } from "../constants/actionTypes";

export const setRegisterUser = person => {
    return {
        type: REGISTER,
        value: person
    }
}

export const setCurrentUser = person => {
    return {
        type: LOGIN,
        value: person
    }
}

export const addTask = task => {
    return {
        type: ADD_TASK,
        value: task
    }
}