import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { getColorInfo } from '../actions';
import { colorMindAPI } from '../actions';
import ColorInfo from './ColorInfo';

// change return numberes to percent

class ColorsList extends Component {
  componentDidMount() {
    this.props.analyzeImage(this.props.url);
    this.props.colorMindAPI();
  };
  // Make API call each time the URL changes
  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url ) {
      this.props.analyzeImage(this.props.url);
    };
  };

  colorsRender() {
    // if there is no error in request and colors data is returned
    if (this.props.colors.length >=1) {
      const ColorsList = this.props.colors.map(color =>
          <div
            key={color}
            className="color-wrapper"
            // onClick={() => this.props.getColorInfo(color.slice(1, color.length))}
          >
          <div
            className="color-square"
            style={{backgroundColor: color}}
          />
          <p>
            {color}
          </p>
        </div>
      );
      return(ColorsList);
    }
    // otherwise return error statement
    return (
      <div>
        {this.props.error}
      </div>
    );
  };

  render() {
    return (
    <div className="ui container">
      {this.colorsRender()}
    </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    colors: state.colors,
    url: state.url.url,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  analyzeImage,
  getColorInfo,
  colorMindAPI
})(ColorsList);
