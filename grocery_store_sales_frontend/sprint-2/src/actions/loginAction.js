export const LOGIN=(data)=>{
    console.log(data)
    return{
        type : "LOG-IN",
        payload: data
    }
}

export const getFlagLogin=(state)=>{
    console.log(state.loginReducer.flagLogin)
    return state.loginReducer.flagLogin;
}

