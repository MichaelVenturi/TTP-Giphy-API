import React from "react";

<<<<<<< HEAD
function SearchField(props) {
  return (
    <div>
      {/* <input type="text" name="searchTerm" onChange={this.handleChange}></input> */}
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
=======
function SearchField(props){
  //Is this just 3 buttons and a text input?
  return <div>
      <form id="gifLookup">
        <label><b><i>Search Term:</i></b></label>
        <input type="text" id="searchTerm" name="searchTerm" placeholder="Try cats" onChange={(event)=>props.searchTerm = event.target.value}>
        </input>
        <button type="button" onClick={()=>console.log("Regular was clicked")}>Regular Search</button>
        <button type="button" onClick={()=>console.log("Trending was clicked")}>Trending Search</button>
        <button type="button" onClick={()=>console.log("Random was clicked")}>Random Search</button>
      </form>
    </div>
>>>>>>> 2a446dec48c947e65bcd9ceb667f00b28470d623
}

export default SearchField;