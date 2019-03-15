import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { AlphaPicker } from 'react-color';
import { connect } from 'react-redux';
import { updateHexColor } from '../actions';
import { sendColorInfo } from '../actions';

class ColorPicker extends Component {
  handleChange = (color, event) => {
    console.log(color.hex);
    let colorPalette = this.props.colors;
    //update new item in color array
    colorPalette[this.props.position] = color.hex
    // send new color pallette
    this.props.updateHexColor(colorPalette);
    this.props.sendColorInfo(color.hex);
  }
  render() {
    if(this.props.hexColor.length >= 1) {
      return (
        <div className="color-picker">
          <h4>Hue</h4>
          <HuePicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChange={ this.handleChange }
          />
          {/* <h6>Alpha</h6>
          <AlphaPicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChangeComplete={ this.handleChange }
          /> */}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  console.log(state.colorInfo);
  return {
    hexColor: state.colorInfo.hexColor,
    colors: state.colors.colors,
    position: state.colorInfo.position
  };
};

export default connect(mapStateToProps, { updateHexColor, sendColorInfo })(ColorPicker);
