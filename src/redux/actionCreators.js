import {GET_AUTH} from './constans';

export const getAuth = (username) => ({
        type: GET_AUTH,
        authUser: username
})