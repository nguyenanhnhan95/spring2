import axios from "axios";
export const paymentOrderDB=async(total)=>{
    const response= await axios.post(`http://localhost:8080/payment?total=${total}`)
    return response.data;
}
export const paidOrderDB=async(total,accumulate,headers)=>{
    const response= await axios.post(`http://localhost:8080/payment/paid?total=${total}&accumulate=${accumulate}`,null,{headers})
    return response.data;
}
export const paidImmediateDB=async(id,total,headers)=>{
    const response= await axios.post(`http://localhost:8080/payment/paid-immediately?id=${id}&total=${total}`,null,{headers})
    return response.data;
}