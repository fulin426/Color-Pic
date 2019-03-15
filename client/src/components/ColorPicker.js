import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import { updateHexColor } from '../actions';
import { sendColorInfo } from '../actions';
import { sendAlphaInfo } from '../actions';
import { sendSelectedColor } from '../actions';

class ColorPicker extends Component {
  handleChange = (color, event) => {
    console.log(color.hex);
    let colorPalette = this.props.colors;
    //update new item in color array
    colorPalette[this.props.position] = color.hex
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
          {/* <h4>Hue</h4>
          <HuePicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChange={ this.handleChange }
          /> */}
          <ChromePicker
            onChange={ this.handleChange }
            color={{
              r: this.props.R,
              g: this.props.G,
              b: this.props.B,
              a: this.props.a
            }}
          />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  console.log(state);
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
