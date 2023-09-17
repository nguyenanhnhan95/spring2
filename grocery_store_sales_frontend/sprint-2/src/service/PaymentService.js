import axios from "axios";
export const paymentOrderDB=async(total)=>{
    const response= await axios.post(`http://localhost:8080/payment?total=${total}`)
    return response.data;
}
export const paidOrderDB=async(total,headers)=>{
    const response= await axios.post(`http://localhost:8080/payment/ordered?total=${total}`,null,{headers})
    return response.data;
}