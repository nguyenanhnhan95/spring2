import axios from "axios";
export const getUserByEmailDB=async(headers)=>{
    console.log(headers)
    const response = await axios.get(`http://localhost:8080/users`,{headers})
    return response.data;
}
export const getUserByIdDB=async(headers,id)=>{

    const response = await axios.get(`http://localhost:8080/users/find-user?id=${id}`,{headers})
    return response.data;
}