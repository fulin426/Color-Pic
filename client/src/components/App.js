import React, { Component } from 'react';
import './App.css';

import ColorsList from './ColorsList';
import ImageMain from './ImageMain';
import ImageSelection from './ImageSelection';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="header">
          <h2 >Choose a picture and analyze it</h2>
        </div>
        <div className="ui grid">
          <ImageSelection />
          <ImageMain />
        </div>
          <ColorsList/>
      </div>
    );
  }
}

export default App;
