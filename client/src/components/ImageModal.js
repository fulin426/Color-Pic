import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { changeMainImage } from '../actions';
import { addImageSelection } from '../actions';
import { Button, Modal, Input } from 'semantic-ui-react'

class AddImgModal extends Component {
  state = {
    input: '',
    open: false
  };

  submitURL(event) {
    event.preventDefault();
    // add error handle in case of bad url
    this.props.analyzeImage(this.state.input);
    this.props.changeMainImage(this.state.input);
    this.props.addImageSelection(this.state.input);
    // Clear inputbar on submit
    this.setState({input: ''});
    // Close modal
    this.close();
  };

  handleInput(event) {
    this.setState({input: event.target.value});
  }

  // Semantic UI settings
  close = () => {
    this.setState({ open: false });
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state
      return (
        <div>
          <Button onClick={this.closeConfigShow(false, true)}>Try your own image</Button>
          <Modal
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}
          >
            <Modal.Content className="add-image-modal">
              <h3>Try your own image</h3>
              <Input
                className="url-input"
                type="text"
                onChange={event => this.handleInput(event)}
                value={this.state.input}
                placeholder="Copy and paste image url..."
               />
              <Button
                onClick={event => this.submitURL(event)}
                className="ui button"
                color='blue'
              >
                Submit
              </Button>
            </Modal.Content>
          </Modal>
        </div>
      )
    }
}

export default connect(null, { analyzeImage, changeMainImage, addImageSelection })(AddImgModal);
