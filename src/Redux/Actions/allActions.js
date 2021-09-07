import { FETCH_FILTER_BY_TITLE_DATA,FETCH_FILTER_BY_ID_DATA } from "./index";
export const fetchFilterByTitleData=(data)=>{
    return {
        type:FETCH_FILTER_BY_TITLE_DATA,
        payload:data
    }
}
export const fetchFilterByIdData=(data)=>{
    return{
        type:FETCH_FILTER_BY_ID_DATA,
        payload:data
    }
}
