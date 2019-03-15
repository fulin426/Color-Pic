import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { sendColorInfo } from '../actions';
import { sendPositionInfo } from '../actions';
import { colorMindAPI } from '../actions';

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
    if (this.props.colors !== prevProps.colors) {
      this.props.sendColorInfo(this.props.colors[0]);
    }
  };

  handleOnClickSquare(color, index) {
    this.props.sendColorInfo(color);
    this.props.sendPositionInfo(index);
  }

  colorsRender() {
    // if there is no error in request and colors data is returned
    if (this.props.colors.length >=1) {
      const ColorsList = this.props.colors.map((color,index) =>
          <div
            key={color}
            className="color-wrapper"
            onClick={() => this.handleOnClickSquare(color, index)}
          >
          <div
            className="color-square"
            style={{backgroundColor: color}}
          />
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
  console.log(state);
  return {
    colors: state.colors.colors,
    url: state.url.url,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  analyzeImage,
  sendColorInfo,
  sendPositionInfo,
  colorMindAPI
})(ColorsList);
