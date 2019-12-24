import { REGISTER, LOGIN } from "../constants/actionTypes";

const initialState = {
    currentUser: {},
    users: {}
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER: 
            localStorage.setItem('user', JSON.stringify(action.value))
            return {
                ...state,
                users: action.value
            }
        case LOGIN:
            return {
                ...state,
                currentUser: action.value
            }
        default: 
            return state
    }
}