import React from "react";

function SearchField(props){
  //Is this just 3 buttons and a text input?
  return <div>
      <form id="gifLookup">
        <label><b><i>Search Term:</i></b></label>
        <input type="text" id="searchTerm" name="searchTerm" placeholder="Try cats" onChange={(event)=>console.log(event.target.value)}>
        </input>
        <button type="button" onClick={()=>console.log("Regular was clicked")}>Regular Search</button>
        <button type="button" onClick={()=>console.log("Trending was clicked")}>Trending Search</button>
        <button type="button" onClick={()=>console.log("Random was clicked")}>Random Search</button>
      </form>
    </div>
}

export default SearchField;