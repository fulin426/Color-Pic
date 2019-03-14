import React, { Component } from 'react';
import { connect } from 'react-redux';

class ColorInfo extends Component {
  render(){
    // console.log(this.props.colorInfo.colorData);
    if(this.props.apiResponse === 'received') {
      return (
        <div className="color-info">
         <p className="info-text">r: {this.props.colorData.rgb.r}</p>
         <p className="info-text">g: {this.props.colorData.rgb.g}</p>
         <p className="info-text">b: {this.props.colorData.rgb.b}</p>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    apiResponse: state.colorInfo.apiResponse,
    colorData: state.colorInfo.colorData
  };
};

export default connect(mapStateToProps, { })(ColorInfo);
