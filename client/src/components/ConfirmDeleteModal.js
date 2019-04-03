import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Confirm, Icon } from 'semantic-ui-react';
import { deleteColorPalette } from '../actions/MyPaletteAPI';

class ConfirmDelete extends Component {
  state = {
    open: false
  };

  show = () => {
    this.setState({
      open: true
    });
  }

  handleConfirm = () => {
    // Item is removed from state via reducer
    // instead of making another call to MongoDB
    this.props.deleteColorPalette(this.props.objectID);
    this.setState({
      open: false
    });
  }

  handleCancel = () => {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div className="confirm-delete-modal">
        <Icon
          size='large'
          onClick={this.show}
          name="trash alternate"
        />
        <Confirm
          open={this.state.open}
          content="Are you sure you want to delete?"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          size="small"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    deleteColor: state.myPalettes.DeleteColor,
  };
};

export default connect(mapStateToProps, {
  deleteColorPalette
})(ConfirmDelete);
