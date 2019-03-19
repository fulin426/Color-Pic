import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import { updateHexColor } from '../actions';
import { sendColorInfo } from '../actions';
import { sendAlphaInfo } from '../actions';
import { sendSelectedColor } from '../actions';

class ColorPicker extends Component {
  handleChange = (color, event) => {
    let colorPalette = this.props.colors;
    // create new color object
    let newColor = {
      hexColor: color.hex.toUpperCase(),
      alpha: color.rgb.a
    };
    //update new item in color array
    colorPalette[this.props.position] = newColor
    // send new color pallette
    this.props.updateHexColor(colorPalette);
    this.props.sendColorInfo(color.hex);
    this.props.sendSelectedColor(color.hex);
    this.props.sendAlphaInfo(color.rgb.a);
  }

  render() {
    if(this.props.colors.length >= 1) {
      return (
        <div className="color-picker">
          <ChromePicker
            className="chrome-picker"
            style={{ marginRight: 4 + 'em' }}
            color={{
              r: this.props.R,
              g: this.props.G,
              b: this.props.B,
              a: this.props.colors[this.props.position].alpha
            }}
            onChange={ this.handleChange }
          />
          {/* <h4>Alpha</h4> */}
          {/* <AlphaPicker
            style={{ marginRight: 4 + 'em' }}
            color={{
              r: this.props.R,
              g: this.props.G,
              b: this.props.B,
              a: this.props.a
            }}
            onChange={ this.handleChange }
          /> */}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    hexColor: state.colorInfo.hexColor,
    R: state.colorInfo.R,
    G: state.colorInfo.G,
    B: state.colorInfo.B,
    a: state.colorInfo.alpha,
    colors: state.colors.colors,
    position: state.colorInfo.position
  };
};

export default connect(mapStateToProps, {
  updateHexColor,
  sendColorInfo,
  sendSelectedColor,
  sendAlphaInfo })(ColorPicker);
