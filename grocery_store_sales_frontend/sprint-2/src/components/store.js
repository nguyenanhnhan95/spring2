import { createStore,combineReducers } from "redux";
import { cartReducer } from "../reducer/cartReducer";
import { useReducer } from "react";
import { searchReducer } from "../reducer/searchReducer";
import { loginReducer } from "../reducer/loginReducer";
import { paymentReducer } from "../reducer/paymentReducer";
const rootReducer=combineReducers({
    cartReducer:cartReducer,
    searchReducer:searchReducer,
    loginReducer:loginReducer,
    paymentReducer:paymentReducer
})
export const store=createStore(rootReducer);