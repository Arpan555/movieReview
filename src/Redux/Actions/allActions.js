import { FETCH_FILTER_BY_TITLE_DATA,FETCH_FILTER_BY_ID_DATA,
    RESET_FILTER_BY_ID_DATA,RESET_FILTER_BY_TITLE_DATA,
FETCH_FILTER_BY_SEARCH_DATA ,RESET_FILTER_BY_SEARCH_DATA
,FETCH_FILTER_BY_SEARCH_MOVIE_DATA,RESET_FILTER_BY_SEARCH_MOVIE_DATA} from "./index";
export const fetchFilterByTitleData=(data)=>{
    return {
        type:FETCH_FILTER_BY_TITLE_DATA,
        payload:data
    }
}
export const resetFilterByTitleData=()=>{
    return {
        type:RESET_FILTER_BY_TITLE_DATA
    }
}
export const fetchFilterByIdData=(data)=>{
    return{
        type:FETCH_FILTER_BY_ID_DATA,
        payload:data
    }
}
export const resetFilterByIdData=()=>{
    return{
        type:RESET_FILTER_BY_ID_DATA
    }
}
export const fetchFilterBySearchData=(data)=>{
    return{
        type:FETCH_FILTER_BY_SEARCH_DATA,
        payload:data
    }
}
export const resetFilterBySearchData=()=>{
    return{
        type:RESET_FILTER_BY_SEARCH_DATA
    }
}
export const fetchFilterBySearchMovieData=(data)=>{
    return{
        type:FETCH_FILTER_BY_SEARCH_MOVIE_DATA,
        payload:data
    }
}
export const resetFilterBySearchMovieData=()=>{
    return{
        type:RESET_FILTER_BY_SEARCH_MOVIE_DATA
    }
}