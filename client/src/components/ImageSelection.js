import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainImage } from '../actions';
import { analyzeImage } from '../actions';
import { Button } from 'semantic-ui-react'
import  Modal from './Modal';
import SavePalette from './SavePalette';

class ImageSelection extends Component {
  renderImages () {
    return (
      this.props.exampleUrl.map(url =>
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
      <div>
        <div className="images-container">
          {this.renderImages()}
        </div>
        <Modal />
        <Button
          className="regen-btn"
          content="Regenerate"
          onClick={() => this.props.analyzeImage(this.props.url)}
        />
        <SavePalette />
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
  analyzeImage })(ImageSelection);
