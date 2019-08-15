import * as types from './constans';

export const getAuth = (username) => {
    return {
        type: types.GET_AUTH,
        authUser: username
    }
}