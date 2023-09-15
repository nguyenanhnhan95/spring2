export const LOGIN=(data)=>{
    console.log(data)
    return{
        type : "login",
        payload: data
    }
}