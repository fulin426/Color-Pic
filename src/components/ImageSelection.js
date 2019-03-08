import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainImage } from '../actions';
import { analyzeImage } from '../actions';
import { randomImage } from '../actions';

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
      <div className="images-select-wrapper">
        {this.renderImages()}
        <button onClick={() => this.props.randomImage()}>
          Random
        </button>
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
