import "./App.css";
import Movies from "./components/movies";
import React from "react";
import ListGroup from "./components/common/list-group";

function App() {
  return (
    <React.Fragment>
      <main className="container-fluid">
        <h1>Vidly</h1>
        <Movies></Movies>
      </main>
    </React.Fragment>
  );
}

export default App;
