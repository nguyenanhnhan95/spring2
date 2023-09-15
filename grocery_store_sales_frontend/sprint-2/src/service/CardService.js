import axios from "axios";
export const getCartsByEmailUserDB=async(id)=>{
    const response = await axios.get(`http://localhost:8080/carts?id=${id}`)
    return response.data;
}
export const deleteCardByIdDB=async(id,headers)=>{
    console.log(headers);
    const response = await axios.delete(`http://localhost:8080/carts?id=${id}`,{headers})
    return response.data;
}
export const getCartsByIdProduct=async(id)=>{
    const response = await axios.get(`http://localhost:8080/carts/id-product?id=${id}`)
    return response.data;
}
export const updateCartsDB=async(cart)=>{
    const response = await axios.patch(`http://localhost:8080/carts`,cart)
    return response.data;
}
export const saveCartsDB=async(id,headers)=>{
    const response = await axios.post(`http://localhost:8080/carts?id=${id}`,null,{headers})
    return response.data;
}