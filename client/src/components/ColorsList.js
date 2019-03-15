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
    // if (this.props.colors !== prevProps.colors) {
    //   this.props.sendColorInfo(this.props.colors[0]);
    // }
  };

  handleOnClickSquare(color, index) {
    this.props.sendSelectedColor(color);
    this.props.sendColorInfo(color);
    this.props.sendPositionInfo(index);
  }

  renderBorder(color) {
    if (this.props.selectedColor === color) {
      return {
        border: '3px solid black',
        backgroundColor: color };
    }
    return {
      backgroundColor: color };
  }

  colorsRender() {
    // if there is no error in request and colors data is returned
    if (this.props.colors.length >=1) {
      const ColorsList = this.props.colors.map((color,index) =>
          <div
            key={color}
            className="color-square"
            style={this.renderBorder(color)}
            onClick={() => this.handleOnClickSquare(color, index)}
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
    <div className="ui container">
      {this.colorsRender()}
    </div>
    );
  }
};

const mapStateToProps = state => {
  // console.log(state.colorInfo.selectedColor);
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
