import axios from "axios"
import {fetchFilterByTitleData,fetchFilterByIdData} from "./Redux/Actions/allActions"
const API="https://www.omdbapi.com"
const API_KEY="4b4b68f5"
export const requestFilterByTitle=(state)=>{
    return async(dispatch)=>{
        const{title,year,plot}=state
        const url=`${API}/?t=${title}&y=${year}&plot=${plot}&apikey=${API_KEY}`
        try{
            const filterByTitleData=await axios.get(`${url}`)
            dispatch(fetchFilterByTitleData(filterByTitleData.data))
        }catch(err){
            console.log(err)
        }
   }
}
export const requestFilterById=(state)=>{
    return async(dispatch)=>{
        const {id,plot}=state
        const url=`${API}/?i=${id}&plot=${plot}&apikey=${API_KEY}`
        try {
            const filterByIdData=await axios.get(`${url}`)
            dispatch(fetchFilterByIdData(filterByIdData.data))
            
        } catch (error) {
            console.log(error)
        }
    }
}
