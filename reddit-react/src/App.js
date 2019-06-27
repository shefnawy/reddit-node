import "./App.css";
import React, { Component } from "react";
import "./styles/main.css";
import Header from "./components/Header";
// import Post from "./components/Post";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Posts from "./components/Posts";
import SignUp from "./components/SignUp";

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    token: null
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ token });
    }
  }
  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/login", {
        email: e.target.email.value,
        password: e.target.password.value
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            loggedIn: true,
            token: res.data.token,
            username: res.data.username
          });
          localStorage.setItem("token", res.data.token);
        }
      })

      .catch(err => console.log(err));
  };

  signUp = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/signup", {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ username: res.data.username, loggedIn: true });
        }
      })
      .catch(err => console.log(err));
  };

  logout = () => {
    this.setState({ token: null, loggedIn: false });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="app">
        <Header
          username={this.state.username}
          loggedIn={this.state.loggedIn}
          logout={this.logout}
        />
        <Switch>
          <Route
            exact
            path="/login"
            component={() => (
              <Login
                login={this.login}
                loggedIn={this.state.loggedIn}
                username={this.state.username}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            component={() => (
              <SignUp signUp={this.signUp} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route exact path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default App;
