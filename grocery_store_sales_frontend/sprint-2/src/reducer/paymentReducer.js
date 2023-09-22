const initialValue = {
    total: 0,
    accumulate: 0,
    typePayment: 0,
    productArray:[],
    flagProduct: true
}
export const paymentReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "PAYMENT_CART":
            console.log(action.payload.total)
            const newValue = {
                total: action.payload.total,
                accumulate: action.payload.accumulate,
                typePayment: action.payload.typePayment,
                productArray: action.payload.productArray,
                flagProduct: !action.payload.flagProduct
            }
            console.log(newValue)
            return newValue
        default:
            return state;
    }
}