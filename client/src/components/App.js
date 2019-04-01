import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HomePage from './HomePage';
import MyPallettes from './MyPallettes';
import AboutPage from './AboutPage';
import axios from 'axios';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   let title = 'Special Color Set'
  //   let colors = [
  //     { hexColor: "#781112", alpha: 1 },
  //     { hexColor: "#677685", alpha: 1 },
  //     { hexColor: "#97D647", alpha: 1 },
  //     { hexColor: "#FAF383", alpha: 1 },
  //     { hexColor: "#A074C0", alpha: 1 }
  //   ];
  //
  //   axios.post('http://localhost:5000/colors/create', {
  //     title: title,
  //     lastName: colors
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderMenu />
          <Route path="/" exact component={HomePage} />
          <Route path="/MyPallettes" component={MyPallettes} />
          <Route path="/About" component={AboutPage} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
