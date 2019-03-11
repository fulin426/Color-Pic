import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainImage } from '../actions';
import { analyzeImage } from '../actions';
import { randomImage } from '../actions';
import  Modal from './Modal';

class ImageSelection extends Component {
  renderImages () {
    return (
      this.props.url.map(url =>
        <div key={url} >
          <img
            className="image-selection"
            src={url}
            alt="selection"
            onClick={() => this.props.changeMainImage(url)}
          />
        </div>
      )
    );
  };

  render() {
    return(
      <div className="right floated right aligned three wide column">
        <div className="images-container">
          {this.renderImages()}
        </div>
        <button
          className="random-btn"
          onClick={() => this.props.randomImage()}
        >
          Random
        </button>
        <Modal />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    url: state.url.exampleImages
  };
};

export default connect(mapStateToProps, { changeMainImage, analyzeImage, randomImage })(ImageSelection);
