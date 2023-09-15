export const searchListProduct=(search)=>{
    return {
        type:"SEARCH_LIST_PRODUCT",
        payload: search
    }
}
export const getSearch=(state)=>{
    console.log(state.searchReducer.search)
    return state.searchReducer.search;
}
export const getSearchStatus=(state)=>{
    return state.searchReducer.flagSearch
}