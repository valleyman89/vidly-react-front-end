import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Navbar from "./components/Navbar";
import NotFound from "./components/notFound";
import React from "react";
import Rentals from "./components/rentals";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <React.Fragment>
      {/* call navbar component */}
      <Navbar />
      <main className="container-fluid">
        {/* switch */}
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm} />
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
