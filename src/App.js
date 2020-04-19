import React from "react";
import "./App.css";
import ListState from "./context/List/listState";
import SearchState from "./context/Search/searchState";
import List from "./Components/List";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">GitHub User Finder</header>
      <SearchState>
        <ListState>
          <Search />
          <List />
        </ListState>
      </SearchState>
    </div>
  );
}

export default App;
