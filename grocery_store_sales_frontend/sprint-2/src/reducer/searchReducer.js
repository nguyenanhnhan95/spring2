const initialValue={
    search: [0,0,"",0,0],
    flagSearch:true
}
export const searchReducer=(state=initialValue,action)=>{
    switch(action.type){
        case "SEARCH_LIST_PRODUCT":
            const newSearchUpdate=action.payload.search
            console.log(newSearchUpdate)
            const flagSearchNew = !action.payload.flagSearch;
            return {search:newSearchUpdate,flagSearch:flagSearchNew}
            default:
                
                return state
    }
}