import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChromePicker } from 'react-color';
import { Button, Modal, Icon, Input } from 'semantic-ui-react';
import { updateColorPalette } from '../actions/MyPaletteAPI';

class EditModal extends Component {
  state = {
    open: false,
    title: '',
    selectedSet: []
  };

  componentDidMount() {
    // send info to local state initially
    this.setState({
      title: this.props.title,
      selectedSet: this.props.data[this.props.colorPosition].colors
    });
  }

  handleInput(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleConfirm = () => {
    // send original title if canceled
    this.setState({
      open: false
    });
    const UpdateData = {
      title: this.state.title,
      colors: this.state.selectedSet
    }
    this.props.updateColorPalette(this.props.objectID, UpdateData);
  }

  cancel = () => {
    // send original title if canceled
    this.setState({
      open: false,
      title: this.props.title
    });
    console.log(this.state);
  }

  renderOneColorSet(data, position) {
    const colorSet = data[position].colors.map(color =>
      <div className="color-square-container" key={color.hexColor}>
        <div
          className="color-square"
          style={{
            backgroundColor: color.hexColor,
            opacity: color.alpha
          }}
        />
      </div>
     );
     return colorSet;
  }

  //Semantic UI configeration
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  render() {
    console.log(this.props.data);
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div className="edit-modal">
        <Icon
          size='large'
          onClick={this.closeConfigShow(false, true)}
          name="edit"
        />
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Edit Palette</Modal.Header>
          <Modal.Content>
            <Input
              className="savepalette-modal-input"
              label="Title"
              value={this.state.title}
              onChange={event => this.handleInput(event)}
              placeholder='Edit Palette Name...'
            />
            <div className="colors-render">
              {this.renderOneColorSet(this.props.data, this.props.colorPosition)}
            </div>
            <ChromePicker />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.cancel}>
              Cancel
            </Button>
            <Button
              onClick={this.handleConfirm}
              color='blue'
            >
              Confirm
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.myPalettes.Data,
  };
};

export default connect(mapStateToProps, { updateColorPalette })(EditModal);
