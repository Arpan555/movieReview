import React from 'react'
import { useSelector } from 'react-redux'
const FilterBySearchMovie = () => {
    const filterData=useSelector(state=>state.reducer.movieFilterDataBySearchMovie)
    return (
        <div>
             {filterData.Search && filterData.Search.map((data,i)=>
                    <div key={i}>
                        <img src={data.Poster} alt={data.Poster}/>
                        <h2>Title:<b>{data.Title}</b></h2>
                        <h3>Year:<b>{data.Year}</b></h3>
                        <h3>imdbID:<b>{data.imdbID}</b></h3>
                        <h3>Type:<b>{data.Type}</b></h3>
                        <hr/>
                    </div>
             )}
        </div>
    )
}

export default FilterBySearchMovie
