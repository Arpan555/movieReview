import { FETCH_FILTER_BY_ID_DATA, FETCH_FILTER_BY_TITLE_DATA } from "../Actions/index";
const initialState={
    movieFilterData:[],
    }
export default function reducer(state=initialState,action)
{
    switch(action.type)
    {
        case FETCH_FILTER_BY_TITLE_DATA:
            return{
                ...state,
                movieFilterData:action.payload
                  }
        case FETCH_FILTER_BY_ID_DATA:
            return{
                ...state,
                movieFilterData:action.payload

                }
        default:{
            return state
                }
    }
}