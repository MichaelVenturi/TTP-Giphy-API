import React from "react";
import reactDOM from "react-dom";
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
    // this.getTrendingResults = this.getTrendingResults.bind(this);
    // this.getRandomResult = this.getRandomResult.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.displayLoading = this.displayLoading.bind(this);
  }

  // Merge these into one function eventually
  getSearchResults = async (type) => {
    console.log(type);
    let url;
    switch (type) {
      case "search":
        url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${this.state.APIkey}`;
        break;
      case "trending":
        url = `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.APIkey}`;
        break;
      case "random":
        url = `http://api.giphy.com/v1/gifs/random?api_key=${this.state.APIkey}`;
        break;
      default:
        break;
    }
    try {
      let response = await fetch(url);
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

  displayResults = async (type) => {
    const data = await this.getSearchResults(type);
    this.displayLoading();
    console.log(typeof data.data);
    if (!data) {
      alert("error");
      return;
    }
    const resultDiv = document.querySelector("#results");

    let results = [];

    if (type !== "random") {
      for (const dataSet of data.data) {
        results.push(<GifCard url={dataSet.images.original.url}></GifCard>);
      }
    } else {
      // can't iterate when doing random
      results.push(<GifCard url={data.data.images.original.url}></GifCard>);
    }

    reactDOM.render(results, resultDiv);
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

  displayLoading = () => {
    const resultDiv = document.querySelector("#results");
    reactDOM.render("loading", resultDiv);
  };

  render() {
    return (
      <div className="App">
        <h1>GIPHY Search</h1>
        <SearchField
          handleChange={this.handleChange}
          getSearchResults={this.displayResults}
        ></SearchField>
        <div id="results"></div>
      </div>
    );
  }
}

export default App;

// getTrendingResults = async () => {
//     try {
//       let response = await fetch(
//         `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.APIkey}`
//       );
//       console.log("response", response);
//       if (!response.ok) {
//         throw new Error("Error");
//       }
//       let data = await response.json();
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   getRandomResult = async () => {
//     try {
//       let response = await fetch(
//         `http://api.giphy.com/v1/gifs/random?api_key=${this.state.APIkey}`
//       );
//       console.log("response", response);
//       if (!response.ok) {
//         throw new Error("Error");
//       }
//       let data = await response.json();
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
