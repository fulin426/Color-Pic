import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { getColors } from '../actions';

class MyPallettes extends Component {
  componentDidMount() {
    this.props.getColors();
  }

  render() {
    return(
      <Header as="h1" className="header">
        My Color Pallettes
      </Header>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myPallettes: state.myPallettes
  };
};

export default connect (mapStateToProps, { getColors })(MyPallettes);
