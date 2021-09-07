import React from 'react'
import { useSelector } from 'react-redux'
const FilterById= () => {
    const filterData = useSelector(state => state.reducer.movieFilterDataById)
    return (
        <div>
            <center>
                {filterData.length!==0 ?
                <table>
                    <tbody> 
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Rated</th>
                        <th>Released</th>
                        <th>imdID</th>
                        <th>imdb Rating</th>
                    </tr>
                    <tr>
                    <td>{filterData.Title}</td>
                    <td>{filterData.Type}</td>
                    <td>{filterData.Rated}</td>
                    <td>{filterData.Released}</td>
                    <td>{filterData.imdbID}</td>
                    <td>{filterData.imdbRating}</td>
                    </tr>
                    </tbody>
                    </table>
                    :""}
            </center>
        </div>
    )
}
export default FilterById
