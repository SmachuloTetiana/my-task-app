import * as fromActions from "../constants/actionTypes";

export const setRegisterUser = person => ({
    type: fromActions.REGISTER,
    value: person
})

export const setCurrentUser = person => ({
    type: fromActions.LOGIN,
    value: person
})

export const logOutUser = () => ({
    type: fromActions.LOG_OUT
})

export const addTask = text => ({
    type: fromActions.ADD_TASK,
    payload: {
        isEditing: false,
        text
    }
})

export const deleteTask = id => ({
    type: fromActions.DELETE_TASK,
    id
})

export const editTask = id => ({
    type: fromActions.EDIT_TASK,
    id
})

export const saveEditTask = (id, newTask) => ({
    type: fromActions.SAVE_EDIT_TASK,
    id,
    newTask
})