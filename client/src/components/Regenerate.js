import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { Button } from 'semantic-ui-react';

class Regenerate extends Component {
  render() {
    return (
      <Button
        className="regen-btn"
        content="Regenerate"
        onClick={() => this.props.analyzeImage(this.props.url)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url.url
  };
}

export default connect(mapStateToProps, { analyzeImage })(Regenerate);
