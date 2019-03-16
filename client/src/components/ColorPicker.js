import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { AlphaPicker } from 'react-color';
import { connect } from 'react-redux';
import { updateHexColor } from '../actions';
import { sendColorInfo } from '../actions';
import { sendAlphaInfo } from '../actions';
import { sendSelectedColor } from '../actions';

class ColorPicker extends Component {
  handleChange = (color, event) => {
    console.log(color.hex);
    console.log(color.rgb.a);
    let colorPalette = this.props.colors;
    console.log(colorPalette);
    // create new color object
    let newColor = {
      hexColor: color.hex,
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
          <h4>Hue</h4>
          <HuePicker
            style={{ marginRight: 4 + 'em' }}
            color={{
              r: this.props.R,
              g: this.props.G,
              b: this.props.B,
              a: this.props.a
            }}
            onChange={ this.handleChange }
          />
          <h4>Alpha</h4>
          <AlphaPicker
            style={{ marginRight: 4 + 'em' }}
            color={{
              r: this.props.R,
              g: this.props.G,
              b: this.props.B,
              a: this.props.a
            }}
            onChange={ this.handleChange }
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
