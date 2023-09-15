import { saveCartsDB, updateCartsDB } from "../service/CardService";
const headers={
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
}
const initialValue={
    
    flagCart:true
}
export const cartReducer=(state=initialValue,action)=>{
    switch (action.type){
        case 'ADD_TO_CART':
            let flagCart = action.payload.flagCart
            flagCart=!flagCart
            return {flagCart}
          
          
            default:
                return state;
    }
}