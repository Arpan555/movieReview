import "./App.css";
import React, { useState } from "react";
import { requestFilterByTitle,requestFilterById } from "./Thunk";
import { useDispatch } from "react-redux";
import {resetFilterByIdData,resetFilterByTitleData} from "./Redux/Actions/allActions"
import FilterByTitle from "./FilterByTitle";
import FilterById from "./FilterById";
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
  const handleInputDataByTitle = (e) => {
    let { name, value } = e.target;
    setFilterByTitle({ ...filterByTitle, [name]: value });
  };
  const handleInputDataById = (e) => {
    let { name, value } = e.target;
    setFilterById({ ...filterById, [name]: value });
  };
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
  return (
    <div>
      <center>
        <h2>Fetch Data From Api</h2>
        <div className="container">
          <form method="POST" onSubmit={handleSubmitByTitle}>
            <h2>By Title</h2>
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
        </div>
        <hr/>
        <FilterByTitle/>
        <div className="container">
          <form method="POST" onSubmit={handleSubmitById}>
            <h2>By Id</h2>
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
        </div>

        <hr />
        <FilterById/>
        
      </center>
    </div>
  );
}

export default App;
