import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newColorPalette } from '../actions/MyPaletteAPI';
import { Button, Modal, Input, Header } from 'semantic-ui-react'

class SavePalette extends Component {
  state = {
    input: '',
    open: false,
    error: false
  };

  handleInput (event) {
    // set error to false as long as there's user input
    this.setState({
      input: event.target.value,
      error: false
    });
  }

  // Modal Settings
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
  this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => {
    // reset to default state on close
    this.setState({
      input: '',
      open: false,
      error: false
    });
  }

  // Send new color set to database
  handleConfirmClick() {
    this.props.newColorPalette({
      title: this.state.input,
      colors: this.props.colors
    })
    this.close();
  }

  //if empty Input
  setError() {
    this.setState({
      error: true
    });
  }

  renderConfirmButton() {
    // set error to true if empty title input
    if (this.state.input === '') {
      return (
        <Button onClick={() => this.setError()}
          color='blue'
          style={{ opacity: 0.7 }}
        >
          Create New
        </Button>
      );
    } else {
      return(
        <Link to="/MyPallettes">
          <Button
            color='blue'
            style={{ marginLeft: .75 + 'em'}}
            onClick={() => this.handleConfirmClick()}
          >
            Create New
          </Button>
        </Link>
      );
    }
  }

  renderTitleInput() {
    // if user clicks confirm with blank title
    // render red error input
    if (this.state.error === true) {
        return(
          <Input
            className="savepalette-modal-input"
            label="Title"
            value={this.state.input}
            onChange={event => this.handleInput(event)}
            placeholder='Title Required...'
            error
          />
        );
    }
    else {
      //everything else render normal input
      return(
        <Input
          className="savepalette-modal-input"
          label="Title"
          value={this.state.input}
          onChange={event => this.handleInput(event)}
          placeholder='New Palette Name...'
        />
      );
    }
  }

  colorsRender() {
    const ColorsList = this.props.colors.map((color,index) =>
      <div key={color.hexColor} className="color-square-container">
        <div
          className="color-square"
          style={{
            backgroundColor: color.hexColor,
            opacity: color.alpha
          }}
        />
        <p>{color.hexColor}</p>
      </div>
    );
    return(ColorsList);
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>Save Palette</Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Content>
            <Header as="h2">
              Save Palette
            </Header>
            {this.renderTitleInput()}
            <div className="colors-render">
              {this.colorsRender()}
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.close()}>Cancel</Button>
            {this.renderConfirmButton()}
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colors.colors,
  };
};

export default connect(mapStateToProps, { newColorPalette })(SavePalette);
