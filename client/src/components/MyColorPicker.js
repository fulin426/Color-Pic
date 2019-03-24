import React from 'react';
import { connect } from 'react-redux';
import { updateHexColor } from '../actions';
import { sendColorInfo } from '../actions';
import { sendAlphaInfo } from '../actions';
import { sendSelectedColor } from '../actions';
import { CustomPicker } from 'react-color';
import CustomPointer from './CustomPointer';

const { Hue } = require('react-color/lib/components/common');

class MyColorPicker extends React.Component {
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
        <Hue
          color={{
            r: this.props.R,
            g: this.props.G,
            b: this.props.B,
            a: this.props.a
          }}
          pointer={ CustomPointer }
          onChange={ this.handleChange }
        />
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  // console.log(state);
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
  sendAlphaInfo })(CustomPicker(MyColorPicker));
