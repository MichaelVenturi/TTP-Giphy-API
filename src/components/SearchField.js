import React from "react";

function SearchField(props) {
  //Is this just 3 buttons and a text input?
  // search= search?q=
  // trending = trending?
  // random = random?
  return (
    <div>
      <form id="gifLookup">
        <label>
          <b>
            <i>Search Term: </i>
          </b>
        </label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="Try cats"
          onChange={props.handleChange}
        ></input>
        <button type="button" onClick={() => props.getSearchResults("search")}>
          Regular Search
        </button>
        <button
          type="button"
          onClick={() => props.getSearchResults("trending")}
        >
          Trending Search
        </button>
        <button type="button" onClick={() => props.getSearchResults("random")}>
          Random Search
        </button>
      </form>
    </div>
  );
}

export default SearchField;
