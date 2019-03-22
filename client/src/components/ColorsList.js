import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { sendColorInfo } from '../actions';
import { sendPositionInfo } from '../actions';
import { sendSelectedColor } from '../actions';
import { clearRecieved } from '../actions';

class ColorsList extends Component {
  componentDidMount() {
    this.props.clearRecieved();
    this.props.analyzeImage(this.props.url);
  };
  // Make API call each time the URL changes
  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url ) {
      this.props.analyzeImage(this.props.url);
    };
    if (this.props.status === 'recieved') {
      // send the first square color info once information sent
      // back from API
      let hexColor = this.props.colors[0].hexColor;
      let index = this.props.position;
      let alpha = 1;
      this.handleOnClickSquare(hexColor, index, alpha);
      this.props.clearRecieved();
    }
  };

  handleOnClickSquare(color, index, alpha) {
    this.props.sendSelectedColor(color);
    this.props.sendColorInfo(color, alpha);
    this.props.sendPositionInfo(index);
  }

  renderBorder(index, color, alpha) {
    if (this.props.position === index) {
      return {
        border: '4px solid black',
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
            style={this.renderBorder(index, color.hexColor, color.alpha)}
            onClick={() => this.handleOnClickSquare(color.hexColor, index, color.alpha)}
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
    position: state.colorInfo.position,
    url: state.url.url,
    error: state.error,
    status: state.colors.status
  };
};

export default connect(mapStateToProps, {
  analyzeImage,
  sendColorInfo,
  sendPositionInfo,
  sendSelectedColor,
  clearRecieved
})(ColorsList);
