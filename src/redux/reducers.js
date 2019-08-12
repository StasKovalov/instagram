import * as types from './constans';

const initialState = {
    isAuth: false
}

 const reducers = (state = initialState, action) => {
        switch(action.type) {
            case types.GET_AUTH:
                return {
                    ...state,
                    isAuth: true
                }

            default:
                return state;
    }
}

export default reducers;