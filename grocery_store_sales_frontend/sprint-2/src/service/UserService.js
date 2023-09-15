import axios from "axios";
export const getUserByEmailDB=async(headers)=>{
    const response = await axios.get(`http://localhost:8080/users`,{headers})
    return response.data;
}