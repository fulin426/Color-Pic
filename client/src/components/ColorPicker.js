import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { AlphaPicker } from 'react-color';
import { connect } from 'react-redux';

class ColorPicker extends Component {

  render() {
    console.log(this.props.hexColor);
    if(this.props.hexColor.length >= 1) {
      return (
        <div className="color-picker">
          <HuePicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChange={ console.log }
          />
          <AlphaPicker
            style={{ marginRight: 4 + 'em' }}
            color={ this.props.hexColor }
            onChange={ console.log }
          />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    hexColor: state.colorInfo.hexColor
  };
};

export default connect(mapStateToProps, { })(ColorPicker);
