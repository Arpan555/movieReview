import { FETCH_FILTER_BY_ID_DATA, FETCH_FILTER_BY_TITLE_DATA,RESET_FILTER_BY_ID_DATA,RESET_FILTER_BY_TITLE_DATA} from "../Actions/index";
const initialState={
    movieFilterDataByTitle:[],
    movieFilterDataById:[],
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
        case FETCH_FILTER_BY_ID_DATA:
            return{
                ...state,
                movieFilterDataById:action.payload

                }
        case RESET_FILTER_BY_TITLE_DATA:
            return{
                ...state,
                movieFilterDataByTitle:[]
                }
        case RESET_FILTER_BY_ID_DATA:
            return{
                ...state,
                movieFilterDataById:[]
            }
        
        default:{
            return state
                }
    }
}