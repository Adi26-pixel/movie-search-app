import { useState } from "react";
import SearchMovie from "./SearchMovie";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
    </div>
  );
}

export default App;
