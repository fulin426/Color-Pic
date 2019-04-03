import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HomePage from './HomePage';
import MyPallettes from './MyPallettes';
import AboutPage from './AboutPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderMenu />
          <Route path="/" exact component={HomePage} />
          <Route path="*/MyPallettes" component={MyPallettes} />
          <Route path="*/About" component={AboutPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
