import React from 'react'
import Popup from 'reactjs-popup'

const Modal = () => (
  <Popup
    trigger={<button className="modal-btn"> Try Your Own Image </button>}
    modal
    closeOnDocumentClick
  >
    <h3>Try your own image</h3>
    <form>
      <div class="ui input">
        <input
          className="url-input"
          type="text"
          placeholder="Copy and paste Url..."
        />
      </div>
    </form>
  </Popup>
)

export default Modal;
