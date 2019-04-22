import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainImage } from '../actions';
import { analyzeImage } from '../actions';
import { clearRecieved } from '../actions';
import { clearPosition } from '../actions';
import { deleteURL } from '../actions';
import { Grid, Icon } from 'semantic-ui-react';
import  ImageModal from './ImageModal';

class ImageSelection extends Component {
  handleClick(url) {
    // first clear the status from API
    this.props.clearRecieved();
    // set position to 1
    this.props.clearPosition();
    this.props.changeMainImage(url);
  }

  renderBorder(selectedUrl) {
    if (this.props.url === selectedUrl) {
      return {
        border: '3px solid #0000CC',
        opacity: 1
      };
    } else {
      return null;
    }
  }

  renderImages () {
    return (
      this.props.exampleUrl.map(url =>
        <div
          className="image-wrapper"
          key={url}
        >
          <img
            className="image-selection"
            src={url}
            alt="selection"
            style={this.renderBorder(url)}
            onClick={() => this.handleClick(url)}
          />
          <div
            onClick={() => this.props.deleteURL(url)}
            className="delete-img">
            <Icon name="remove circle" />
          </div>
        </div>
      )
    );
  };

  render() {
    return(
      <Grid.Column mobile={16} computer={3}>
        <div className="image-modal-container">
          <div className="images-container">
            {this.renderImages()}
          </div>
          <div className="modal-container">
            <ImageModal />
          </div>
        </div>
      </Grid.Column>
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
  deleteURL,
  analyzeImage
})(ImageSelection);
