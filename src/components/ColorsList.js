import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { getColorInfo } from '../actions';

// change return numberes to percent
const toPercent = num => {
  return Math.floor(num*100) + '%';
}

class ColorsList extends Component {
  componentDidMount() {
    this.props.analyzeImage(this.props.url);
  };
  // Make API call each time the URL changes
  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url ) {
      this.props.analyzeImage(this.props.url);
    };
  };

  colorsRender() {
    // if there is no error in request and colors data is returned
    if (this.props.colors.length >= 1) {
      let sortColors = this.props.colors.sort((a,b) => b.value - a.value);
      const ColorsList = sortColors.map(color =>
        <div
          key={color.raw_hex}
          className="color-wrapper"
          onClick={() => this.props.getColorInfo(color.raw_hex.slice(1, color.raw_hex.length))}
        >
          <div
            className="color-square"
            style={{"backgroundColor": color.raw_hex}}
          />
          <p>{color.raw_hex}</p>
          <p>{toPercent(color.value)}</p>
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
    <div className="right floated center aligned thirteen wide column">
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

export default connect(mapStateToProps, { analyzeImage, getColorInfo })(ColorsList);
