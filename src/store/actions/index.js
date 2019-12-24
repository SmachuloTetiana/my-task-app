import { REGISTER, LOGIN } from "../constants/actionTypes";

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