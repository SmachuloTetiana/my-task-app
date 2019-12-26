import { REGISTER, LOGIN, ADD_TASK, DELETE_TASK, EDIT_TASK, SAVE_EDIT_TASK } from "../constants/actionTypes";

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

export const deletedTask = id => {
    return {
        type: DELETE_TASK,
        value: id
    }
}

export const editTask = id => {
    return {
        type: EDIT_TASK,
        editItem: false,
        itemId: id
    }
}

export const saveEditTask = (id, editedText) => {
    return {
        type: SAVE_EDIT_TASK,
        itemId: id,
        value: editedText
    }
}