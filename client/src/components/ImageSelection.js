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

  // renderRandomImage() {
  //   if(this.props.random_url.length >= 1) {
  //     return(
  //       <img
  //         className="image-selection"
  //         src={this.props.random_url}
  //         alt="selection"
  //         onClick={() => this.props.changeMainImage(this.props.random_url)}
  //       />
  //     );
  //   }
  //   return null;
  // }

  render() {
    return(
      <div className="right floated right aligned three wide column">
        <div className="images-container">
          {this.renderImages()}
          {/* {this.renderRandomImage()} */}
        </div>
        {/* <button
          className="random-btn"
          onClick={() => this.props.randomImage()}
        >
          Random
        </button> */}
        <Modal />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    url: state.url.exampleImages,
    random_url: state.url.random_url
  };
};

export default connect(mapStateToProps, { changeMainImage, analyzeImage, randomImage })(ImageSelection);
