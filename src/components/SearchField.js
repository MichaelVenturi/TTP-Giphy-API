import React from "react";

class SearchField extends React.Component {
  //Is this just 3 buttons and a text input?
  render(){
    return <div>
      <form>
        <label><b><i>Search Term:</i></b></label>
        <input type="text" id="searchTerm" name="searchTerm" placeholder="Try cats">
        </input>
        <button type="button">Regular Search</button>
        <button type="button">Trending Search</button>
        <button type="button">Random Search</button>
      </form>
    </div>
  }
}

export default SearchField;