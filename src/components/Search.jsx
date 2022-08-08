import '../assets/styles/components/Search.scss';
import {FaSearch} from "react-icons/fa";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery';



const Search = () => {

  //const [searchText, setsearchText] = useState("");
  const history = useHistory();
  
    const query= useQuery();
    const search= query.get("search");
  
    //  useEffect(()=>{
    //    setsearchText(search || "");
    //  },[search]);

  const handleSubmit=(e)=> {
    e.preventDefault();
    // history.push("/?search="+ searchText);
  };

    return(
      <form className="mainSearch" onSubmit={handleSubmit}>
    {/* <h2 className="main__title">¿Qué quieres ver hoy?</h2> */}
    <div className="containerSearch">
      <input 
      type="text" 
      className="inputSearch" 
      placeholder="Buscar..."
      aria-label="search movies"
      value={search} 
      onChange={(e) => {
        const value= e.target.value;
        history.push("/?search="+ value);
      }} 
      />
        <button className="buttonSearch" type="submit">
        <FaSearch size={20}/>
      </button>
    </div>
  </form>
    );
  
};

export default Search;