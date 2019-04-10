import React, { Component } from 'react';
import { connect } from 'react-redux';

class ColorInfo extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }
  render(){
    return (
      <div className="color-info">
       <h5>Hex</h5>
       <input
         className="hex-info-input"
         value={this.props.hexColor}
       />
       <p className="info-text">R</p>
       <p className="info-text">G</p>
       <p className="info-text">B</p>
       <p className="info-text">a</p>
       <div>
         <input
           className="info-input"
           value={this.props.R}
           onChange={event => this.handleChange(event)}
         />
         <input
           className="info-input"
           value={this.props.G}
           onChange={event => this.handleChange(event)}
         />
         <input
           className="info-input"
           value={this.props.B}
           onChange={event => this.handleChange(event)}
         />
         <input
           className="info-input"
           value={this.props.a}
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
    a: state.colorInfo.alpha,
    colors: state.colors.colors,
    position: state.colorInfo.position
  };
};

export default connect(mapStateToProps, { })(ColorInfo);
