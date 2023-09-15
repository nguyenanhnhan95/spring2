import { createStore,combineReducers } from "redux";
import { cartReducer } from "../reducer/cartReducer";
import { useReducer } from "react";
import { searchReducer } from "../reducer/searchReducer";
const rootReducer=combineReducers({
    cartReducer:cartReducer,
    searchReducer:searchReducer
})
export const store=createStore(rootReducer);