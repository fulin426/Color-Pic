import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { sendColorInfo } from '../actions';
import { sendPositionInfo } from '../actions';
import { colorMindAPI } from '../actions';
import { sendSelectedColor } from '../actions';

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

  handleOnClickSquare(color, index) {
    this.props.sendSelectedColor(color);
    this.props.sendColorInfo(color);
    this.props.sendPositionInfo(index);
  }

  renderBorder(color, alpha) {
    if (this.props.selectedColor === color) {
      return {
        border: '3px solid black',
        backgroundColor: color,
        opacity: alpha
      };
    }
    return {
      backgroundColor: color,
      opacity: alpha
    };
  }

  colorsRender() {
    // if there is no error in request and colors data is returned
    if (this.props.colors.length >=1) {
      const ColorsList = this.props.colors.map((color,index) =>
          <div
            key={color.hexColor}
            className="color-square"
            style={this.renderBorder(color.hexColor, color.alpha)}
            onClick={() => this.handleOnClickSquare(color.hexColor, index)}
          >
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
    <div>
      {this.colorsRender()}
    </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    colors: state.colors.colors,
    selectedColor: state.colorInfo.selectedColor,
    url: state.url.url,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  analyzeImage,
  sendColorInfo,
  sendPositionInfo,
  sendSelectedColor,
  colorMindAPI
})(ColorsList);
