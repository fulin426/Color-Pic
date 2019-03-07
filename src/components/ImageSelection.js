import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainImage } from '../actions';
import { analyzeImage } from '../actions';

class ImageSelection extends Component {
  changeImage(url) {
    this.props.changeMainImage(url);
    this.props.analyzeImage(url);
  };

  renderImages () {
    return (
      this.props.url.map(url =>
        <div key={url} >
          <img
            className="image-selection"
            src={url}
            alt="selection"
            onClick={() => this.changeImage(url)}
          />
        </div>
      )
    );
  };

  render() {
    return(
      <div className="images-select-wrapper">
        {this.renderImages()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    url: state.url.exampleImages
  };
};

export default connect(mapStateToProps, { changeMainImage, analyzeImage })(ImageSelection);
