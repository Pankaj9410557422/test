import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";
import Pagination from "./Components/Pagination/Pagination";
import "./App.css"
import titleimg from "./Components/Images/RickMorty.png"


function App() {
let [fetchedData,updateFetchedData]= useState([]);
let {info,results}=fetchedData
let [pageNumber, updatePageNumber] = useState(1);
let [search, setSearch] = useState("");

let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
useEffect(()=>{
  (async function(){
    let data = await fetch(api).then((res)=>res.json());
    updateFetchedData(data);
  })();
},[api]);
  return (
    <div className="App">
      <header className="title_header">
      <a href="/" aria-label="home page">
      <img
            className="App_logo"
            src={titleimg}
            alt="Rick and Morty"
            role="banner"
          />
        </a>
      </header>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={results}/>
          </div>
        </div>
      </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber}/>
    </div>
  );
}

export default App;
