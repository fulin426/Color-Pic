import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { changeMainImage } from '../actions';
import { addImageSelection } from '../actions';
import { closeImgModal } from '../actions';
import { openImgModal } from '../actions';
import { newImgSubmit } from '../actions';
import { clearImgSubmit } from '../actions';
import { clearErrorStatus } from '../actions';
import { showModalLoader } from '../actions';
import { Button, Modal, Input, Dimmer, Loader } from 'semantic-ui-react'

class AddImgModal extends Component {
  state = {
    input: '',
  };

  submitURL(event) {
    event.preventDefault();
    this.props.analyzeImage(this.state.input);
    this.props.newImgSubmit();
    this.props.showModalLoader();
  };

  componentDidUpdate() {
    if (this.props.error === false && this.props.status === 'recieved' && this.props.image === 'new') {
      // only run if there are no errors, data is recieved and a new image is submitted
      this.props.changeMainImage(this.state.input);
      this.props.addImageSelection(this.state.input);
      this.props.clearImgSubmit();
      this.setState({
        input: ''
      });
    }
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
    // Clear error if someone types anything
    this.props.clearErrorStatus();
  }

  //if empty Input
  setError() {
    this.setState({ error: true });
  }

  renderURLinput() {
    // if user clicks confirm with blank title
    // render red error input
    if (this.state.error === true) {
      return(
        <Input
          className="url-input"
          type="text"
          onChange={event => this.handleInput(event)}
          value={this.state.input}
          placeholder="Please enter a url..."
          error
         />
      );
    } else if (this.props.error !== false) {
      return(
        <Input
          className="url-input"
          type="text"
          onChange={event => this.handleInput(event)}
          value={this.state.input}
          placeholder="Error! Please check url and try again..."
          error
         />
      );
    }
    else {
      //everything else render normal input
      return(
        <Input
          className="url-input"
          type="text"
          onChange={event => this.handleInput(event)}
          value={this.state.input}
          placeholder="Copy and paste image url..."
         />
      );
    }
  }

  renderSubmitButton() {
    if (this.state.input === '') {
      return(
        <Button
          onClick={() => this.setError()}
          className="ui button"
          color='blue'
          style={{ opacity: 0.7 }}
        >
          Submit
        </Button>
      );
    } else {
      return(
        <Button
          onClick={event => this.submitURL(event)}
          className="ui button"
          color='blue'
        >
          Submit
        </Button>
      );
    }
  }

  renderErrorMessage() {
    if (this.props.error !== false) {
      return(
        <p> Bad Request! Please check your URL and try again </p>
      );
    }
  }

  renderLoader() {
    if(this.props.loader === 'show') {
      return(
        <Dimmer active inverted>
          <Loader size='big' inverted />
        </Dimmer>
      );
    }
  }
  // Semantic UI settings
  close = () => {
    this.setState({
      input: '',
    });
    // Open and Close state in store.js instead of local state
    this.props.closeImgModal();
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({
      closeOnEscape,
      closeOnDimmerClick
    });
    this.props.openImgModal();
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state
      return (
        <div>
          <Button onClick={this.closeConfigShow(false, true)}>Try your own image</Button>
          <Modal
            open={this.props.open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}
          >
            <Modal.Content className="add-image-modal">
              <h3>Try your own image</h3>
              {this.renderURLinput()}
              {this.renderSubmitButton()}
              {this.renderErrorMessage()}
              {this.renderLoader()}
            </Modal.Content>
          </Modal>
        </div>
      )
    }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    open: state.colors.open,
    error: state.colors.error,
    status: state.colors.status,
    loader: state.colors.loader,
    image: state.colors.image
  };
};

export default connect(mapStateToProps, {
  analyzeImage,
  changeMainImage,
  addImageSelection,
  closeImgModal,
  openImgModal,
  newImgSubmit,
  clearImgSubmit,
  clearErrorStatus,
  showModalLoader
})(AddImgModal);
