import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Confirm, Icon } from 'semantic-ui-react';
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
    // Item also removed via state
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
          content={`Are you sure you want to delete ${this.props.title} palette?`}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          size="small"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    deleteColor: state.myPalettes.DeleteColor,
  };
};

export default connect(mapStateToProps, {
  deleteColorPalette
})(ConfirmDelete);
