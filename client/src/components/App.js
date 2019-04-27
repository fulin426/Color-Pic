import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { loadUser } from "../actions/authActions";
import HeaderMenu from "./HeaderMenu";
import LandingPage from "./LandingPage";
import MyPallettes from "./MyPallettes";
import Footer from "./Footer";
import Generate from "./Generate";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log(
      "This app was created by Fu-Lin Liu, a web developer based out of San Francisco. I can be reached at fulin426@gmail.com"
    );
    // Only load user if there is a token in local storage
    if (localStorage.getItem("token") !== null) {
      this.props.loadUser();
    }
  }
  render() {
    return (
      <BrowserRouter>
        <HeaderMenu />
        <Route path="/" exact component={LandingPage} />
        <Route path="/Generate" component={Generate} />
        <Route path="/MyPallettes" component={MyPallettes} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { loadUser }
)(App);
