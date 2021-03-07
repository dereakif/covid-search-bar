import React, { Component } from "react";
import Search from "./Search/Search";
import "./App.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
