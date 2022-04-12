import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Customers from "./components/customers";
import auth from "./services/authService";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Navbar from "./components/Navbar";
import NotFound from "./components/notFound";
import React, { Component } from "react";
import RegisterForm from "./components/registerForm";
import Rentals from "./components/rentals";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* call navbar component */}
        <Navbar user={this.state.user} />
        <main className="container-fluid">
          {/* switch */}
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/new" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
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
}

export default App;
