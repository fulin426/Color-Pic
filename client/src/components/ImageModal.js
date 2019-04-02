import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';
import { changeMainImage } from '../actions';
import { addImageSelection } from '../actions';

// Rewrite using semanti UI modal
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  submitURL(event) {
    event.preventDefault();
    console.log(this.state.input);
    // add error handle in case of bad url
    this.props.analyzeImage(this.state.input);
    this.props.changeMainImage(this.state.input);
    this.props.addImageSelection(this.state.input);
    //clear inputbar on submit
    this.setState({input: ''});
  };

  render() {
    return (
      <Popup
        trigger={<button className="modal-btn"> Try Your Own Image </button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div>
            <h3>Try your own image</h3>
              <form>
                <div className="ui action input">
                  <input
                    className="url-input"
                    type="text"
                    onChange={event => this.setState({input: event.target.value})}
                    value={this.state.input}
                    placeholder="Copy and paste Url..."
                  />
                  <button
                    onClick={event => {
                      this.submitURL(event);
                      close();
                    }}
                    className="ui button"
                  >
                    Submit
                  </button>
                </div>
              </form>
          </div>
          )
        }
      </Popup>
    );
  }
}

export default connect(null, { analyzeImage, changeMainImage, addImageSelection })(Modal);
