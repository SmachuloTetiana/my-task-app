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

export const syncCurrentUser = id => ({
    type: fromActions.SYNC_CURRENT_USER,
    value: id
})

export const addTask = text => ({
    type: fromActions.ADD_TASK,
    payload: text
})

export const deleteTask = id => ({
    type: fromActions.DELETE_TASK,
    id
})

export const saveEditTask = (id, newTask) => ({
    type: fromActions.SAVE_EDIT_TASK,
    id,
    newTask
})

export const shareTask = (id, shareUserEmail) => ({
    type: fromActions.SHARE_TASK,
    id,
    shareUserEmail
})