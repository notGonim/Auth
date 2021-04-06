

const INITIAL_STATE = {
    user: {}
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'LOGIN_REQUEST':
            return {
                loading: true,
                isAuthenticated: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}