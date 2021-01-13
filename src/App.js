import React from "react";
import reactDOM from "react-dom";
import "./App.css";
import GifCard from "./components/GifCard";
import SearchField from "./components/SearchField";

//API Key:  fOZyz1kQZ2FT4Nsguh8pbPSdnmVmWuvm
class App extends React.Component() {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      results: [],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
      </div>
    );
  }
}

export default App;
