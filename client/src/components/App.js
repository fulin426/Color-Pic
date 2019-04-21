import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { loadUser } from '../actions/authActions';
import HeaderMenu from './HeaderMenu';
import LandingPage from './LandingPage';
import MyPallettes from './MyPallettes';
import Footer from './Footer'
import Generate from './Generate';
import './App.css';

class App extends Component {
  componentDidMount() {
    // Only load user if there is a token in local storage
    if(localStorage.getItem('token') !== null) {
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

export default connect(null, { loadUser })(App);
