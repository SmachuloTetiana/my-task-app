import { REGISTER, LOGIN } from "../constants/actionTypes";

const managerDB = JSON.parse(localStorage.getItem('managerDB'));
const initialState = managerDB || {
    currentUser: null,
    users: []
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER: 
            const { value: user } = action;

            user.id = state.users.length + 1;

            const updatedState = {
                ...state,
                users: [
                    ...state.users,
                    user
                ]
            }

            localStorage.setItem('managerDB', JSON.stringify(updatedState));

            return updatedState;
        case LOGIN:
            const updatedCurrentState = {
                ...state,
                currentUser: action.value
            }
            
            localStorage.setItem('managerDB', JSON.stringify(updatedCurrentState))

            return updatedCurrentState;
        default: 
            return state
    }
}