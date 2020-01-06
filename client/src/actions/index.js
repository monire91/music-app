export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const signed = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const setAlert = (msg, slertType) => dispatch => {
    return {
        type: 'SET_ALERT'
    }
}