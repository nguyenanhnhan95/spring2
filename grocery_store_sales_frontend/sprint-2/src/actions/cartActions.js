export const addToCart=(data)=>{
    return {
        type:"ADD_TO_CART",
        payload :data
    }
}
export const getCart=(state)=>{
    console.log(state.cartReducer.flagCart)
    return state.cartReducer.flagCart;
}
// export const getNumberOfProductsInCart=(state)=>{
//     console.log(state.cartReducer.cart.reduce((total,c)=>total+=c.product.id,0))
//     return state.cartReducer.cart.reduce((total,c)=>total+=c.product.id,0)
// }