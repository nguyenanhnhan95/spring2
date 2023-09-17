import { createStore,combineReducers } from "redux";
import { cartReducer } from "../reducer/cartReducer";
import { useReducer } from "react";
import { searchReducer } from "../reducer/searchReducer";
import { loginReducer } from "../reducer/loginReducer";
const rootReducer=combineReducers({
    cartReducer:cartReducer,
    searchReducer:searchReducer,
    loginReducer:loginReducer
})
export const store=createStore(rootReducer);