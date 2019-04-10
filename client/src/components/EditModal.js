import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChromePicker } from 'react-color';
import { Button, Modal, Icon, Input, Grid, Segment } from 'semantic-ui-react';
import { updateColorPalette } from '../actions/MyPaletteAPI';
import { sendPositionInfo } from '../actions';
import { sendSelectedColor } from '../actions';
import { sendColorInfo } from '../actions';
import { clearPosition } from '../actions';
import { sendAlphaInfo } from '../actions';
import ColorInfo from './ColorInfo';

class EditModal extends Component {
  state = {
    open: false,
    title: '',
    selectedSet: [],
  };

  componentDidMount() {
    // send info to local state initially
    this.setState({
      title: this.props.title,
      selectedSet: this.props.data[this.props.colorPosition].colors
    });
    this.props.clearPosition();
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
    });
    this.props.clearPosition();
  }

  handleConfirm = () => {
    this.setState({
      open: false,
    });
    const UpdateData = {
      title: this.state.title,
      colors: this.state.selectedSet
    };
    this.props.updateColorPalette(this.props.objectID, UpdateData);
    this.props.clearPosition();
  }

  handleOnClickSquare(color, index, alpha) {
    this.props.sendSelectedColor(color);
    this.props.sendColorInfo(color, alpha);
    this.props.sendPositionInfo(index);
  }

  handleChange = (color, event) => {
    let colorPalette = this.state.selectedSet;
    // create new color object
    let newColor = {
      hexColor: color.hex.toUpperCase(),
      alpha: color.rgb.a
    };
    // update new item in color array
    colorPalette[this.props.position] = newColor
    // set new color square in local state
    this.setState({
      selectedSet: colorPalette
    })
    // update color info and display
    this.props.sendColorInfo(color.hex.toUpperCase());
    this.props.sendSelectedColor(color.hex.toUpperCase());
    this.props.sendAlphaInfo(color.rgb.a);
  }

  renderColorPicker() {
    return (
      <ChromePicker
        className="chrome-picker"
        style={{ marginRight: 4 + 'em' }}
        color={{
          r: this.props.R,
          g: this.props.G,
          b: this.props.B,
          a: this.props.alpha
        }}
        onChange={this.handleChange}
      />
    );
  }

  renderOneColorSet() {
    const colorSet = this.state.selectedSet.map((color, index) =>
      <div className="color-square-container" key={color.hexColor}>
        <div
          className="color-square"
          onClick={() => this.handleOnClickSquare(color.hexColor, index, color.alpha)}
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

  //Semantic UI configeration
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({
      closeOnEscape,
      closeOnDimmerClick,
      open: true,
    });
    // send color info for first square when modeal opens
    this.props.sendColorInfo(this.state.selectedSet[0].hexColor, this.state.selectedSet[0].hexColor.alpha);
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick, title } = this.state
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
              value={title}
              onChange={event => this.handleInput(event)}
              placeholder='Edit Palette Name...'
            />
            <div className="colors-render">
              {this.renderOneColorSet()}
            </div>
            <Grid stackable columns={2}>
              <Grid.Column width={10}>
                <Segment>
                  {this.renderColorPicker()}
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
  return {
    data: state.myPalettes.Data,
    position: state.colorInfo.position,
    hexColor: state.colorInfo.hexColor,
    R: state.colorInfo.R,
    G: state.colorInfo.G,
    B: state.colorInfo.B,
    alpha: state.colorInfo.alpha,
  };
};

export default connect(mapStateToProps, {
  updateColorPalette,
  sendPositionInfo,
  sendSelectedColor,
  sendColorInfo,
  sendAlphaInfo,
  clearPosition
})(EditModal);
