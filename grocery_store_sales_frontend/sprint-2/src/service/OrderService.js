import axios from "axios";
export const getOrdersByIdUserDB=async(id,type)=>{
    const response = await axios.get(`http://localhost:8080/orders?id=${id}&idType=${type}`)
    return response.data;
}
export const getOrderManageDB=async(page,name,dataOne,dateTwo,headers)=>{
    const response = await axios.get(`http://localhost:8080/orders/manage?page=${page}&name=${name}&dateOne=${dataOne}&dateTwo=${dateTwo}`,{headers})
    console.log(response.data.content)
    return response.data;
}
export const getOrderByIdDB=async(id,headers)=>{
    const response = await axios.get(`http://localhost:8080/orders/information?id=${id}`,{headers})
    console.log(response.data.content)
    return response.data;
}
export const updateStatusOrderDB=async(id,type,headers)=>{
    console.log(type)
    const response = await axios.patch(`http://localhost:8080/orders/update?id=${id}&type=${type}`,null,{headers})
    console.log(response.data.content)
    return response.data;
}