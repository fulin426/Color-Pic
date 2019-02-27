import React, { Component } from 'react';
import './App.css';
import InputBar from './InputBar';
import ColorsList from './ColorsList';
import axios from 'axios';

const Clarifai = require('clarifai');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //intialize it with empty array or will trigger error at first render
      colors: [],
      theColorApiRes: '',
      imgSRC: 'https://cdn-images-1.medium.com/max/1000/1*PjLIvhVpVh26HXKyIc02lg.jpeg',
      input: '',
      hexSelected: '',
      errorMsg: ''
    };
  }

  componentDidMount() {
    let url = this.state.imgSRC;
    this.clariaApiCall(url);
  }

  clariaApiCall (url) {
    const app = new Clarifai.App({apiKey: 'bd8644854b19417dacdfa3adba21aab1'});
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", url)
    .then(res => {
      this.setState({ colors: res.outputs[0].data.colors });
    },
      err => {
        console.log(err);
        this.setState({errorMsg: err});
      }
    );
  }

  colorApiCall (event) {
    let hex = event.target.dataset.id;
    hex = hex.slice(1, hex.length)
    console.log(hex);
    axios.get(`https://www.thecolorapi.com/id?hex=${hex}`)
    .then(res => {
      console.log(res);
      this.setState({theColorApiRes: res})
    },
    err => {
       console.log(err.message);
       this.setState({errorMessage: err.message});
     })
  }

  imgSearch(event) {
    this.setState({input: event.target.value});
  }

  searchButtonClick() {
    let url = this.state.input;
    this.setState({
      imgSRC: url
    },
      this.clariaApiCall(url)
    );
  }

  colorInfoRender() {
    if (this.state.theColorApiRes === '') {
      return (<div></div>);
    } else {
      return(
        <div>
          <p>R: {this.state.theColorApiRes.data.rgb.r}</p>
          <p>G: {this.state.theColorApiRes.data.rgb.g}</p>
          <p>B: {this.state.theColorApiRes.data.rgb.b}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Choose a picture and analyze it</h2>
        <img
          className="sample-img"
          alt="stairs"
          src={this.state.imgSRC} />
          <InputBar
          searchButtonClick={event => this.searchButtonClick(event)}
          imgSearch={event => this.imgSearch(event)}/>
          <ColorsList
            colorApiCall={event => this.colorApiCall(event)}
            colors={this.state.colors}
          />
          {this.colorInfoRender()}
      </div>
    );
  }
}

export default App;
