import React, { Component } from 'react';
import { Button, Confirm, Icon } from 'semantic-ui-react';

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

export default ConfirmDelete;
