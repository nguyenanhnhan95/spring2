import axios from "axios";
export const getOrdersByIdUserDB=async(id,type)=>{
    console.log(id,type)
    const response = await axios.get(`http://localhost:8080/orders?id=${id}&idType=${type}`)
    console.log(response.data.content)
    return response.data;
}
export const getOrderManageDB=async(name,headers)=>{
    console.log(headers)
    const response = await axios.get(`http://localhost:8080/orders/manage?name=${name}`,{headers})
    console.log(response.data.content)
    return response.data;
}