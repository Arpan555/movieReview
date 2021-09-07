import "./App.css";
import React, { useState } from "react";
import { requestFilterByTitle,requestFilterById,
  requestFilterBySearch,requestFilterBySearchMovie } from "./Thunk";
import { useDispatch } from "react-redux";
import {resetFilterByIdData,resetFilterByTitleData
  ,resetFilterBySearchData,resetFilterBySearchMovieData} from "./Redux/Actions/allActions"
import FilterByTitle from "./FilterByTitle";
import FilterById from "./FilterById";
import FilterBySearch from "./FilterBySearch";
import FilterBySearchMovie from "./FilterBySearchMovie"
function App() {
  const dispatch = useDispatch();
  const [filterByTitle, setFilterByTitle] = useState({
    title: "",
    year: "",
    plot: "short",
  });
  const [filterById,setFilterById]=useState({
    id:"",
    plot:"short"
  })
  const [filterBySearch,setFilterBySearch]=useState({
    movie:"",
    season:"",
    episode:""
  })
  const [filterBySearchMovie,setFilterBySearchMovie]=useState({
    movie:"",
    page:""
  })
  const handleInputDataByTitle = (e) => {
    let { name, value } = e.target;
    setFilterByTitle({ ...filterByTitle, [name]: value });
  };
  const handleInputDataById = (e) => {
    let { name, value } = e.target;
    setFilterById({ ...filterById, [name]: value });
  };
  const handleInputDataBySearch=(e)=>{
    let {name, value}= e.target
    setFilterBySearch({...filterBySearch, [name]: value })
  }
  const handleInputDataBySearchMovie=(e)=>{
    let {name, value}= e.target
    setFilterBySearchMovie({...filterBySearchMovie, [name]: value })
  }
  const handleSubmitByTitle = (e) => {
    e.preventDefault();
    if(!filterByTitle.title){
      alert("Fill The Title Value")
    }
    else{
      dispatch(requestFilterByTitle(filterByTitle));
    }
  };
  const handleSubmitById = (e) => {
    e.preventDefault();
    if(!filterById.id){
      alert("Fill The Id Value")
    }
    else{
      dispatch(requestFilterById(filterById));
    }
  };
  const handleSubmitBySearch= (e) => {
    e.preventDefault()
    if (!filterBySearch.movie){
      alert("Fill The Movie Name")
    }
    else{
      dispatch(requestFilterBySearch(filterBySearch))
    }
  }
  const handleSubmitBySearchMovie= (e) => {
    e.preventDefault()
    if (!filterBySearchMovie.movie){
      alert("Fill The Movie Name")
    }
    else{
      dispatch(requestFilterBySearchMovie(filterBySearchMovie))
    }
  }
  return (
    <div>
      <center>
        <h2>Fetch Data From Api</h2>
        <div className="container">
          <form method="POST" onSubmit={handleSubmitByTitle}>
            <h2>By Title</h2>
            <hr/>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={filterByTitle.title}
              onChange={handleInputDataByTitle}
            />

            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={filterByTitle.year}
              onChange={handleInputDataByTitle}
            />

            <label>Plot</label>
            <select
              name="plot"
              value={filterByTitle.plot}
              onChange={handleInputDataByTitle}
            >
              <option value selected>
                Short
              </option>
              <option value="full">Full</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Search" />&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Reset" onClick={()=> {
              dispatch(resetFilterByTitleData()) 
              setFilterByTitle({title:"",year:"",plot:""})
            }
            }/>
          </form>
        </div><br/>
        <FilterByTitle/>
        <hr/>
        
        <div className="container">
          <form method="POST" onSubmit={handleSubmitById}>
            <h2>By Id</h2>
            <hr/>
            <label>Id:</label>
            <input
              type="text"
              name="id"
              value={filterById.id}
              onChange={handleInputDataById}
            />
            <label>Plot</label>
            <select
              name="plot"
              value={filterById.plot}
              onChange={handleInputDataById}
            >
              <option value selected>
                Short
              </option>
              <option value="full">Full</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Search" />&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Reset" onClick={()=>{
               dispatch(resetFilterByIdData()) 
               setFilterById({id:"",plot:""})
              }
              }/>
          </form>
        </div><br/>
        <FilterById/>
        <hr />
        <div className="container">
          <form method="POST" onSubmit={handleSubmitBySearch}>
            <h2>By Movie , Episode and Season </h2>
            <hr/>
            <label>Movie Name</label>
            <input
              type="text"
              name="movie"
              value={filterBySearch.movie}
              onChange={handleInputDataBySearch}
            />
            <label>Season</label>
            <input type="number" 
            name="season"
            value={filterBySearch.season} 
            onChange={handleInputDataBySearch}/><br/><br/>
            <label>Epispde</label>
            <input type="number" 
            name="episode"
            value={filterBySearch.episode} 
            onChange={handleInputDataBySearch}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Search" />&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Reset" onClick={()=>{
               dispatch(resetFilterBySearchData()) 
               setFilterBySearch({movie:"",season:"",episode:""})
              }
              }/>
          </form>
        </div><br/>
        <FilterBySearch/>
        <hr/>
        <div className="container">
          <form method="POST" onSubmit={handleSubmitBySearchMovie}>
            <h2>By Movie And Page </h2>
            <hr/>
            <label>Movie Name</label>
            <input
              type="text"
              name="movie"
              value={filterBySearchMovie.movie}
              onChange={handleInputDataBySearchMovie}
            />
            <label>Page</label>
            <input type="number" 
            name="page"
            value={filterBySearchMovie.page} 
            onChange={handleInputDataBySearchMovie}/><br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Search" />&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Reset" onClick={()=>{
               dispatch(resetFilterBySearchMovieData()) 
               setFilterBySearchMovie({movie:"",page:""})
              }
              }/>
          </form>
        </div><br/>
        <FilterBySearchMovie/>


      </center>
    </div>
  );
}

export default App;
