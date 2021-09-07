import { FETCH_FILTER_BY_ID_DATA, FETCH_FILTER_BY_TITLE_DATA,RESET_FILTER_BY_ID_DATA,
    RESET_FILTER_BY_TITLE_DATA,FETCH_FILTER_BY_SEARCH_DATA,RESET_FILTER_BY_SEARCH_DATA,
FETCH_FILTER_BY_SEARCH_MOVIE_DATA,RESET_FILTER_BY_SEARCH_MOVIE_DATA} from "../Actions/index";
const initialState={
    movieFilterDataByTitle:[],
    movieFilterDataById:[],
    movieFilterDataBySearch:[],
    movieFilterDataBySearchMovie:[]
    }
export default function reducer(state=initialState,action)
{
    switch(action.type)
    {
        case FETCH_FILTER_BY_TITLE_DATA:
            return{
                ...state,
                movieFilterDataByTitle:action.payload
                  }
        case RESET_FILTER_BY_TITLE_DATA:
            return{
                ...state,
                movieFilterDataByTitle:[]
                }
        case FETCH_FILTER_BY_ID_DATA:
            return{
                ...state,
                movieFilterDataById:action.payload
                }
        case RESET_FILTER_BY_ID_DATA:
            return{
                ...state,
                movieFilterDataById:[]
            }
        case FETCH_FILTER_BY_SEARCH_DATA:
            return{
                ...state,
                movieFilterDataBySearch:action.payload
            }
        case RESET_FILTER_BY_SEARCH_DATA:
            return{
                ...state,
                movieFilterDataBySearch:[]
            }
        case FETCH_FILTER_BY_SEARCH_MOVIE_DATA:
            return{
                ...state,
                movieFilterDataBySearchMovie:action.payload
            }
        case RESET_FILTER_BY_SEARCH_MOVIE_DATA:
            return{
                ...state,
                movieFilterDataBySearchMovie:[]
            }
        default:{
            return state
                }
    }
}