import axios from "axios";
export const getProductsDB=async(page,type,search,searchStatus,sort)=>{
    const response = await axios.get(`http://localhost:8080/products/?page=${page}&type=${type}&search=${search}&searchStatus=${searchStatus}&sort=${sort}`)
    return response.data;
}
export const getProductDB=async(id)=>{
    const response = await axios.get(`http://localhost:8080/products/detail?id=${id}`)
    return response.data;
}
export const getImgProductsDB=async(id)=>{
    const response = await axios.get(`http://localhost:8080/products/img?id=${id}`)
    return response.data;
}
export const getProductsAllDB=async(id)=>{
    const response = await axios.get(`http://localhost:8080/products/type?id=${id}`)
    return response.data;
}