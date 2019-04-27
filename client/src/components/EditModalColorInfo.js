import React, { Component } from "react";
import { connect } from "react-redux";

class EditModalColorInfo extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    const { hexInput, R, G, B, alpha } = this.props;

    return (
      <div className="color-info">
        <h5>Hex</h5>
        <input
          className="hex-info-input"
          value={hexInput}
          onChange={event => this.props.hexColorOnChange(event)}
        />
        <p className="info-text">R</p>
        <p className="info-text">G</p>
        <p className="info-text">B</p>
        <p className="info-text">a</p>
        <div>
          <input
            className="info-input"
            value={R}
            onChange={event => this.handleChange(event)}
          />
          <input
            className="info-input"
            value={G}
            onChange={event => this.handleChange(event)}
          />
          <input
            className="info-input"
            value={B}
            onChange={event => this.handleChange(event)}
          />
          <input
            className="info-input"
            value={alpha}
            onChange={event => this.handleChange(event)}
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
)(EditModalColorInfo);
