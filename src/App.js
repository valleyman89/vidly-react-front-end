import "./App.css";
import Movies from "./components/movies";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <React.Fragment>
      {/* call navbar component */}
      <Navbar />
      <main className="container-fluid">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
