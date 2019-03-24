import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { clearColorList } from '../actions';
import { clearRecieved } from '../actions';
import { clearPosition } from '../actions';
import { Button } from 'semantic-ui-react';

class Regenerate extends Component {
  handleClick(url) {
    // send empty array before recieving new color set
    this.props.clearColorList();
    // first clear the status from API
    this.props.clearRecieved();
    // set position to 1
    this.props.clearPosition();
    this.props.analyzeImage(url);
  }

  render() {
    return (
      <Button
        className="regen-btn"
        content="Regenerate"
        onClick={() => this.handleClick(this.props.url)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url.url
  };
}

export default connect(mapStateToProps, {
  analyzeImage,
  clearRecieved,
  clearPosition,
  clearColorList })(Regenerate);
