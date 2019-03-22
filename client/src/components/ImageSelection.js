import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainImage } from '../actions';
import { analyzeImage } from '../actions';
import { clearRecieved } from '../actions';
import { clearPosition } from '../actions';
import  Modal from './Modal';

class ImageSelection extends Component {
  handleClick(url) {
    // first clear the status from API
    this.props.clearRecieved();
    // set position to 1
    this.props.clearPosition();
    this.props.changeMainImage(url);
  }

  renderImages () {
    return (
      this.props.exampleUrl.map(url =>
        <div key={url} >
          <img
            className="image-selection"
            src={url}
            alt="selection"
            onClick={() => this.handleClick(url)}
          />
        </div>
      )
    );
  };

  render() {
    return(
      <div>
        <div className="images-container">
          {this.renderImages()}
        </div>
        <Modal />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    url: state.url.url,
    exampleUrl: state.url.exampleImages,
  };
};

export default connect(mapStateToProps, {
  changeMainImage,
  clearRecieved,
  clearPosition,
  analyzeImage })(ImageSelection);
