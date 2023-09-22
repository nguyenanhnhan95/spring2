export const PAYMENT=(data)=>{
    return {
        type:"PAYMENT_CART",
        payload:data
    }
}
export const getFlagProduct=(state)=>{
    console.log(state.paymentReducer.flagProduct)
    return state.paymentReducer.flagProduct;
}
export const getAccumulatePayment=(state)=>{
    console.log(state.paymentReducer.accumulate)
    return state.paymentReducer.accumulate;
}
export const getTypePayment=(state)=>{
    console.log(state.paymentReducer.typePayment)
    return state.paymentReducer.typePayment;
}
export const getTotalPayment=(state)=>{

    console.log(state.paymentReducer.total)
    return state.paymentReducer.total;
}
export const getProductArray=(state)=>{
    console.log(state.paymentReducer.productArray)
    return state.paymentReducer.productArray;
}

