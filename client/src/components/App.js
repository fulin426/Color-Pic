import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import LandingPage from './LandingPage';
import MyPallettes from './MyPallettes';
import Footer from './Footer'
import Generate from './Generate';
import './App.css';

class App extends Component {
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

export default App;
