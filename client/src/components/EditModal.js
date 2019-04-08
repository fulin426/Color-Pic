import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChromePicker } from 'react-color';
import { Button, Modal, Icon, Input, Grid, Segment } from 'semantic-ui-react';
import { updateColorPalette } from '../actions/MyPaletteAPI';
import { sendPositionInfo } from '../actions';
import { clearPosition } from '../actions';
import ColorInfo from './ColorInfo';

class EditModal extends Component {
  state = {
    open: false,
    title: '',
    selectedSet: [],
    position: 1
  };

  componentDidMount() {
    // send info to local state initially
    this.setState({
      title: this.props.title,
      selectedSet: this.props.data[this.props.colorPosition].colors
    });
    this.props.clearPosition();
  }

  editColor() {
    // edit color set in state before sending
  }

  handleInput(event) {
    this.setState({
      title: event.target.value
    });
  }

  cancel = () => {
    // send original title if canceled
    this.setState({
      open: false,
      title: this.props.title,
      position: 1
    });
    this.props.clearPosition();
  }

  handleConfirm = () => {
    this.setState({
      open: false,
      position: 1
    });
    const UpdateData = {
      title: this.state.title,
      colors: this.state.selectedSet
    };
    this.props.updateColorPalette(this.props.objectID, UpdateData);
    this.props.clearPosition();
  }

  handleOnClickSquare(index) {
    this.props.sendPositionInfo(index);
  }

  renderCarot(index) {
    if (index === this.props.position) {
      return {
        color: 'black'
      };
    } else {
      return {
        color: 'white'
      };
    }
  }

  renderOneColorSet(data, position) {
    const colorSet = data[position].colors.map((color, index) =>
      <div className="color-square-container" key={color.hexColor}>
        <div
          className="color-square"
          onClick={() => this.handleOnClickSquare(index)}
          style={{
            backgroundColor: color.hexColor,
            opacity: color.alpha,
            cursor: 'pointer'
          }}
        />
        <div
          style={this.renderCarot(index)}
          className="carot-container"
        >
          <Icon size="big" name="caret up" />
        </div>
      </div>
     );
     return colorSet;
  }

  //Semantic UI configeration
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  render() {
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
            <Grid stackable columns={2}>
              <Grid.Column width={10}>
                <Segment>
                  <ChromePicker />
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment>
                  <ColorInfo />
                </Segment>
              </Grid.Column>
            </Grid>
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
    position: state.colorInfo.position
  };
};

export default connect(mapStateToProps, {
  updateColorPalette,
  sendPositionInfo,
  clearPosition
})(EditModal);
