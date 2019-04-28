import React, { Component } from "react";
import { connect } from "react-redux";
import { Confirm, Icon, Modal, Button } from "semantic-ui-react";
import { deleteColorPalette } from "../actions/MyPaletteAPI";
import "./css/confirmDeleteModal.css";

class ConfirmDelete extends Component {
  handleConfirm = () => {
    this.props.deleteColorPalette(this.props.objectID, this.props.token);
    this.props.close();
  };

  render() {
    return (
      <div>
        <p className="item-style" onClick={this.props.openModal}><Icon name="trash" />Delete</p>
        <Modal size="tiny" open={this.props.open} onClose={this.props.close}>
          <Modal.Content>
            <p>{`Are you sure you want to delete ${this.props.title} palette?`}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.close}>Cancel</Button>
            <Button
              onClick={this.handleConfirm}
              color="blue"
              content="Confirm"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deleteColor: state.myPalettes.DeleteColor,
    token: state.auth.token
  };
};

export default connect(mapStateToProps, { deleteColorPalette })(ConfirmDelete);
