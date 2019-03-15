import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { AlphaPicker } from 'react-color';
import { connect } from 'react-redux';
import { updateHexColor } from '../actions';

class ColorPicker extends Component {
  handleChange = color => {
    console.log(this.props.colors);
    let colorPalette = this.props.colors;
    console.log(this.props.position);
    colorPalette[this.props.position] = color.hex
    // send new color pallette
    console.log(colorPalette);
    this.props.updateHexColor(colorPalette);
  }
  render() {
    if(this.props.hexColor.length >= 1) {
      return (
        <div className="color-picker">
          <HuePicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChangeComplete={ this.handleChange }
          />
          <AlphaPicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChangeComplete={ console.log }
          />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    hexColor: state.colorInfo.hexColor,
    colors: state.colors.colors,
    position: state.colorInfo.position
  };
};

export default connect(mapStateToProps, { updateHexColor })(ColorPicker);
