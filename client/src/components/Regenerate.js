import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { clearRecieved } from '../actions/colorInfoActions';
import { clearPosition } from '../actions/colorInfoActions';
import { Button, Icon } from 'semantic-ui-react';

class Regenerate extends Component {
  handleClick = url => () => {
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
        onClick={this.handleClick(this.props.url)}
      >
        <Icon name='redo' />  Regenerate
      </Button>
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
})(Regenerate);
