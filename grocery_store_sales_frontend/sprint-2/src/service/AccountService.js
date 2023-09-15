import axios from "axios";
export const AccountService= async(account)=>{
    const respond=await axios.post("http://localhost:8080/login",account)
    return respond.data;
}
export const RegisterAccountDB=async(account)=>{
    const respond=await axios.post("http://localhost:8080/register",account)
    return respond.data;
}