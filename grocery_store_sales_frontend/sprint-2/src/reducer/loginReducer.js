

const initialValue = {
    flagLogin: true
}
export const loginReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'LOG-IN':
            let flagLoginNew = !action.payload.flagLogin
            return {
                flagLogin:flagLoginNew
            }
        default:
            return state;
    }
}