import React, { Component } from "react";
import { connect } from "react-redux";

class ColorInfo extends Component {
  render() {
    return (
      <div className="color-info">
        <h5>Hex</h5>
        <input className="hex-info-input" value={this.props.hexColor} />
        <p className="info-text">R</p>
        <p className="info-text">G</p>
        <p className="info-text">B</p>
        <p className="info-text">a</p>
        <div>
          <input className="info-input" defaultValue={this.props.R} readOnly />
          <input className="info-input" defaultValue={this.props.G} readOnly />
          <input className="info-input" defaultValue={this.props.B} readOnly />
          <input
            className="info-input"
            defaultValue={this.props.alpha}
            readOnly
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hexColor: state.colorInfo.hexColor,
    R: state.colorInfo.R,
    G: state.colorInfo.G,
    B: state.colorInfo.B,
    alpha: state.colorInfo.alpha,
    colors: state.colors.colors,
    position: state.colorInfo.position
  };
};

export default connect(
  mapStateToProps,
  {}
)(ColorInfo);
