import React from "react";
//import reactDOM from "react-dom";
import "./App.css";
import GifCard from "./components/GifCard";
import SearchField from "./components/SearchField";

//API Key:  fOZyz1kQZ2FT4Nsguh8pbPSdnmVmWuvm
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      results: [],
      APIkey: "fOZyz1kQZ2FT4Nsguh8pbPSdnmVmWuvm",
    };
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getTrendingResults = this.getTrendingResults.bind(this);
    this.getRandomResult = this.getRandomResult.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Merge these into one function eventually
  getSearchResults = async () => {
    try {
      let response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${this.state.APIkey}`
      );
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Error");
      }
      let data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
  getTrendingResults = async () => {
    try {
      let response = await fetch(
        `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.APIkey}`
      );
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Error");
      }
      let data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
  getRandomResult = async () => {
    try {
      let response = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${this.state.APIkey}`
      );
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Error");
      }
      let data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <SearchField
          handleChange={this.handleChange}
          getSearchResults={this.getSearchResults}
        ></SearchField>

        <input
          type="text"
          name="searchTerm"
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default App;
