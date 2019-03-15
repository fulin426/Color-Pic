import React, { Component } from 'react';
import { connect } from 'react-redux';

class ColorInfo extends Component {
  render(){
    // console.log(this.props.colorInfo.colorData);
    if(true) {
      return (
        <div className="color-info">
         <h5>Hex: {this.props.hexColor}</h5>
         <p className="info-text">r: {this.props.R}</p>
         <p className="info-text">g: {this.props.G}</p>
         <p className="info-text">b: {this.props.B}</p>
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
  };
};

export default connect(mapStateToProps, { })(ColorInfo);
